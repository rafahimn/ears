"use client";
import { useState } from 'react';
import { Icon } from './Icon';
import { waLink } from '../lib/site';

const options = [
  { label: 'Awning Solutions', icon: 'spark' },
  { label: 'Canopy Solutions', icon: 'ruler' },
  { label: 'Garage Doors', icon: 'shield' },
  { label: 'Rolling Shutters', icon: 'chevron' },
  { label: 'Gate Motors', icon: 'play' },
  { label: 'Repair & Maintenance', icon: 'wrench' },
  { label: 'Aluminium Works', icon: 'ruler' },
  { label: 'Steel Works', icon: 'shield' },
  { label: 'Polycarbonate Shutters', icon: 'shield' },
] as const;

export function QuickQuotePanel() {
  const [selected, setSelected] = useState('Garage Doors');
  const message = `Hello, I would like an initial quotation.\nRequired service: ${selected}.\nPlease let me know what photos, measurements or location details you need.`;

  return (
    <aside className="reference-quote-card" id="quick-quote" aria-label="Quick WhatsApp quote">
      <div className="reference-quote-head">
        <span className="reference-quote-eyebrow"><Icon name="spark" /> QUICK WHATSAPP QUOTE</span>
        <h2>Choose your<br />required service</h2>
        <p>Select one service and continue to WhatsApp for an initial discussion.</p>
      </div>
      <div className="reference-question-label"><span>1</span><b>What can we help you with?</b></div>
      <div className="reference-service-options" role="group" aria-label="Choose a service">
        {options.map((item) => {
          const active = selected === item.label;
          return (
            <button
              type="button"
              key={item.label}
              className={`reference-service-option${active ? ' selected' : ''}${item.label === 'Polycarbonate Shutters' ? ' long-label' : ''}`}
              aria-pressed={active}
              onClick={() => setSelected(item.label)}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
              {active && <i className="reference-selected-check"><Icon name="check" /></i>}
            </button>
          );
        })}
      </div>
      <a className="reference-whatsapp-cta" href={waLink(message)} target="_blank" rel="noreferrer">
        <Icon name="whatsapp" />
        <span>Continue on WhatsApp</span>
        <Icon name="arrow" />
      </a>
      <p className="reference-quote-footnote"><Icon name="shield" /> No obligation. Scope and pricing are confirmed before work begins.</p>
    </aside>
  );
}
