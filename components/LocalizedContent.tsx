'use client';

import { useEffect } from 'react';
import { arabicTranslations, normalizeTranslationKey } from '../lib/arabic-translations';

type Language = 'en' | 'ar';
type AttrStore = Map<string, string>;

/** Applies the site's authored Arabic copy to existing and newly rendered text nodes.
 * There is no third-party translation script: unmatched long-form copy stays in English
 * until a reviewed Arabic translation is added to the dictionary.
 */
export function LocalizedContent() {
  useEffect(() => {
    const textOriginals = new WeakMap<Text, string>();
    const lastAppliedText = new WeakMap<Text, string>();
    const attrOriginals = new WeakMap<Element, AttrStore>();
    const lastAppliedAttrs = new WeakMap<Element, Map<string, string>>();
    let language: Language = document.documentElement.dataset.siteLanguage === 'ar' ? 'ar' : 'en';

    const isSkipped = (element: Element | null, textNode = false) => {
      if (!element) return false;
      // Keep editable/user-entered content intact, but still translate placeholders,
      // accessible labels and select-option text through the attribute/text handlers.
      const selector = textNode
        ? 'script,style,noscript,svg,code,pre,textarea,input,[contenteditable="true"],[translate="no"],[data-translation-skip]'
        : 'script,style,noscript,svg,code,pre,[contenteditable="true"],[translate="no"],[data-translation-skip]';
      return Boolean(element.closest(selector));
    };

    const translateValue = (source: string) => {
      if (language !== 'ar') return source;
      const key = normalizeTranslationKey(source);
      return arabicTranslations[key] ?? source;
    };

    const processText = (node: Text) => {
      const parent = node.parentElement;
      if (!parent || isSkipped(parent, true)) return;
      let source = textOriginals.get(node);
      const last = lastAppliedText.get(node);
      if (source === undefined) {
        source = node.data;
        textOriginals.set(node, source);
      } else if (last !== undefined && node.data !== last && node.data !== source) {
        // React or a widget supplied genuinely new English copy to a previously translated node.
        source = node.data;
        textOriginals.set(node, source);
      }
      const next = translateValue(source);
      if (node.data !== next) {
        lastAppliedText.set(node, next);
        node.data = next;
      } else if (last === undefined) {
        lastAppliedText.set(node, next);
      }
    };

    const attributes = ['aria-label', 'title', 'placeholder', 'alt'];
    const processElement = (element: Element) => {
      if (isSkipped(element)) return;
      let originals = attrOriginals.get(element);
      if (!originals) { originals = new Map(); attrOriginals.set(element, originals); }
      let applied = lastAppliedAttrs.get(element);
      if (!applied) { applied = new Map(); lastAppliedAttrs.set(element, applied); }
      for (const attr of attributes) {
        const current = element.getAttribute(attr);
        if (current === null) continue;
        let source = originals.get(attr);
        const last = applied.get(attr);
        if (source === undefined) {
          source = current;
          originals.set(attr, source);
        } else if (last !== undefined && current !== last && current !== source) {
          source = current;
          originals.set(attr, source);
        }
        const next = translateValue(source);
        if (current !== next) {
          applied.set(attr, next);
          element.setAttribute(attr, next);
        } else if (last === undefined) {
          applied.set(attr, next);
        }
      }
    };

    const walk = (root: Node) => {
      if (root instanceof Element) processElement(root);
      if (root instanceof Text) { processText(root); return; }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node instanceof Text) processText(node);
        else if (node instanceof Element) processElement(node);
      }
    };

    const onLanguageChange = (event: Event) => {
      const custom = event as CustomEvent<{ language?: Language }>;
      language = custom.detail?.language === 'ar' ? 'ar' : 'en';
      walk(document.body);
    };

    walk(document.body);
    window.addEventListener('site-language-change', onLanguageChange);
    const observer = new MutationObserver((records) => {
      // Process only the changed regions; text/attribute updates we made are idempotent.
      for (const record of records) {
        if (record.type === 'characterData' && record.target instanceof Text) processText(record.target);
        if (record.type === 'attributes' && record.target instanceof Element) processElement(record.target);
        for (const node of Array.from(record.addedNodes)) {
          if (node instanceof Element || node instanceof Text) walk(node);
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['aria-label', 'title', 'placeholder', 'alt'],
    });
    return () => {
      observer.disconnect();
      window.removeEventListener('site-language-change', onLanguageChange);
    };
  }, []);

  return null;
}
