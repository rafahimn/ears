(function initRepairMaintenancePage() {
  const root = document.querySelector('.repair-reference');
  if (!root || root.dataset.repairPageReady === 'true') return;
  root.dataset.repairPageReady = 'true';

  const systems = [
    {
      key: 'garage', name: 'Garage Door', icon: 'garage', symptoms: [
        { label: 'Door stuck or will not move', title: 'Stop operating the door until it is checked.', cause: 'A stuck garage door may have a spring, cable, track or opener fault. Do not force it or keep pressing the remote, especially if the door feels unusually heavy.', level: 'high', badge: 'Safety first', motion: 'stuck' },
        { label: 'Loud bang, door now feels heavy', title: 'A spring or cable fault is possible.', cause: 'A loud bang followed by a heavy door can indicate a broken torsion spring. Stop using the door and keep clear of the moving parts. Send a short video and a photo of the system for an initial review.', level: 'high', badge: 'Urgent review', motion: 'unsafe' },
        { label: 'Motor runs but door does not move', title: 'The drive or trolley may be disengaged.', cause: 'The opener may be running while the trolley is disconnected or a drive gear is worn. A video of the motor running and the door staying still helps narrow down the likely cause.', level: 'medium', badge: 'Diagnosis needed', motion: 'motor' },
        { label: 'Noisy, shaking, or uneven movement', title: 'Tracks, rollers or balance may need attention.', cause: 'Noise, shaking and uneven travel can come from worn rollers, loose hinges, track alignment or an imbalanced door. Continued use may put additional strain on the opener.', level: 'medium', badge: 'Service recommended', motion: 'noise' },
        { label: 'Remote or wall button not working', title: 'Check the remote, receiver and power supply.', cause: 'A flat remote battery, lost pairing, receiver fault or control-board issue can prevent operation. Note whether the wall button still works and send a photo of the opener label if available.', level: 'normal', badge: 'Control check', motion: 'idle' }
      ]
    },
    {
      key: 'shutter', name: 'Rolling Shutter', icon: 'shutter', symptoms: [
        { label: 'Shutter is stuck or jammed', title: 'Keep clear of the shutter until it is secured.', cause: 'Bent slats, damaged guides, a jammed curtain or motor trouble can prevent movement. If it is partly open over a shop entrance, keep people away and do not force it.', level: 'high', badge: 'Urgent review', motion: 'stuck' },
        { label: 'Motor hums but curtain does not move', title: 'A motor, capacitor or limit fault may be involved.', cause: 'A humming motor without curtain movement can indicate a failed capacitor, an incorrect limit setting, a mechanical jam or motor damage. A short video and motor label are useful for diagnosis.', level: 'medium', badge: 'Diagnosis needed', motion: 'motor' },
        { label: 'Slats are bent or damaged', title: 'Individual slats may be repairable.', cause: 'In many systems, damaged slats can be assessed and replaced without changing the whole curtain. Share a close-up photo and a wider photo showing the guides and shutter opening.', level: 'medium', badge: 'Parts check', motion: 'stuck' },
        { label: 'Remote no longer responds', title: 'The remote may need pairing or the receiver checking.', cause: 'The receiver, remote battery or pairing may be the cause. Note whether a wall switch works, and send the motor or receiver label if it is accessible safely.', level: 'normal', badge: 'Control check', motion: 'idle' },
        { label: 'Shutter is noisy or moves roughly', title: 'Guides, rollers and alignment may need servicing.', cause: 'Dry or dirty guides, worn rollers and misalignment can make a shutter noisy and put extra load on the motor. Avoid forcing the system if the curtain is catching or tilting.', level: 'medium', badge: 'Service recommended', motion: 'noise' }
      ]
    },
    {
      key: 'gate', name: 'Gate Motor', icon: 'gate', symptoms: [
        { label: 'Gate does not respond at all', title: 'Start with power, fuse and receiver checks.', cause: 'A dead gate can be caused by power supply, a blown fuse, a receiver or control-board fault. Send a photo of the control box and motor label only if you can access them safely.', level: 'medium', badge: 'Diagnosis needed', motion: 'motor' },
        { label: 'Gate opens but will not close', title: 'A safety sensor may be blocking the closing cycle.', cause: 'A blocked or misaligned photocell can stop a gate from closing as designed. Check for a visible obstruction only; do not bypass a safety sensor.', level: 'high', badge: 'Safety check', motion: 'stuck' },
        { label: 'Gate moves slowly or stops midway', title: 'Motor settings or mechanical resistance may be involved.', cause: 'Motor wear, travel limits, track resistance or a heavy gate can cause slow travel or mid-cycle stops. A short clip showing the movement and the stopping point is helpful.', level: 'medium', badge: 'Service recommended', motion: 'moving' },
        { label: 'Grinding or noisy movement', title: 'Track, wheels or hinges may need attention.', cause: 'Grinding often points to dirty or misaligned tracks, worn wheels or hinges. Avoid repeated operation if the gate is binding, as this may strain the motor.', level: 'medium', badge: 'Service recommended', motion: 'noise' }
      ]
    },
    {
      key: 'barrier', name: 'Parking Barrier', icon: 'barrier', symptoms: [
        { label: 'Barrier is stuck down; entry blocked', title: 'The barrier may need a motor or balance check.', cause: 'Power, motor, spring balance or a control fault can leave the boom down. Do not lift the arm unless you know the manufacturer’s safe manual-release procedure.', level: 'high', badge: 'Priority review', motion: 'stuck' },
        { label: 'Barrier is stuck open', title: 'The entry may need to be secured.', cause: 'A limit switch or control fault can leave the boom raised. Keep the access point supervised if needed and send a photo of the barrier and controller for an initial review.', level: 'high', badge: 'Priority review', motion: 'stuck' },
        { label: 'Remote or ground loop not detecting', title: 'Receiver pairing or loop detection may need checking.', cause: 'Remote pairing, receiver settings, loop detector sensitivity or a damaged detector can cause missed vehicle detection. Share the controller label and describe whether the remote or loop is affected.', level: 'medium', badge: 'Control check', motion: 'motor' }
      ]
    }
  ];

  const tabs = Array.from(root.querySelectorAll('.rx-tabs .rx-tab'));
  const symptomsBox = root.querySelector('.rx-finder .rx-symptoms');
  const resultTitle = root.querySelector('.rx-result h3');
  const resultCause = root.querySelector('.rx-result .rx-cause');
  const urgencyBadge = root.querySelector('.rx-result .rx-urgency');
  const quoteLinks = Array.from(root.querySelectorAll('.rx-result .gx-btn-wa, .rx-hero-ctas .gx-btn-wa, .gx-final-ctas .gx-btn-wa'));
  let activeSystem = systems[0];
  let activeSymptom = null;

  function makeWhatsAppLink(system, symptom) {
    const lines = [
      'Hello Emirates Aluminium Shutter LLC, I need repair and maintenance support.',
      'System: ' + (system ? system.name : 'Door / shutter / gate'),
      'Issue: ' + (symptom ? symptom.label : 'Please help diagnose the fault'),
      'Area / Emirate: __',
      'I will send photos or a short video.'
    ];
    return 'https://wa.me/971552052347?text=' + encodeURIComponent(lines.join('\n'));
  }

  function setSystemMotion(system, symptom) {
    root.querySelectorAll('.rx-motion').forEach((motion) => {
      motion.dataset.system = system.key;
      motion.dataset.motion = symptom ? symptom.motion : 'idle';
    });
  }

  function showDiagnosis(symptom) {
    activeSymptom = symptom;
    if (resultTitle) resultTitle.textContent = symptom.title;
    if (resultCause) resultCause.textContent = symptom.cause;
    if (urgencyBadge) {
      urgencyBadge.dataset.level = symptom.level;
      let label = urgencyBadge.querySelector('.rx-urgency-label');
      if (!label) {
        label = document.createElement('span');
        label.className = 'rx-urgency-label';
        urgencyBadge.appendChild(label);
      }
      label.textContent = symptom.badge;
    }
    root.querySelectorAll('.rx-symptom').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.symptomLabel === symptom.label);
      button.setAttribute('aria-pressed', button.dataset.symptomLabel === symptom.label ? 'true' : 'false');
    });
    setSystemMotion(activeSystem, symptom);
    quoteLinks.forEach((link) => { link.href = makeWhatsAppLink(activeSystem, symptom); });
  }

  function renderSymptoms(system) {
    if (!symptomsBox) return;
    const original = symptomsBox.querySelector('.rx-symptom');
    symptomsBox.replaceChildren();
    system.symptoms.forEach((symptom, index) => {
      let button;
      if (original) {
        button = original.cloneNode(true);
      } else {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'rx-symptom';
        button.innerHTML = '<span></span><svg class="gx-arrow" aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>';
      }
      const span = button.querySelector('span') || button;
      span.textContent = symptom.label;
      button.dataset.symptomLabel = symptom.label;
      button.setAttribute('aria-label', system.name + ': ' + symptom.label);
      button.setAttribute('aria-pressed', 'false');
      button.classList.remove('is-active');
      button.addEventListener('click', () => showDiagnosis(symptom));
      symptomsBox.appendChild(button);
    });
    showDiagnosis(system.symptoms[0]);
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const system = systems[index];
      if (!system) return;
      activeSystem = system;
      tabs.forEach((other) => {
        const selected = other === tab;
        other.classList.toggle('rx-tab-on', selected);
        other.setAttribute('aria-selected', selected ? 'true' : 'false');
        other.tabIndex = selected ? 0 : -1;
      });
      renderSymptoms(system);
    });
  });

  const finder = root.querySelector('#fault-finder');
  root.querySelectorAll('.rx-hero-ctas button, .rx-hero-row button').forEach((button) => {
    button.addEventListener('click', () => {
      if (finder) finder.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (tabs[0]) tabs[0].focus({ preventScroll: true });
    });
  });

  // Keep reference section links and cloned action cards on the current site's contact number.
  root.querySelectorAll('a[href^="tel:"]').forEach((a) => { a.href = 'tel:+971552052347'; });
  root.querySelectorAll('a[href*="wa.me/"]').forEach((a) => { a.target = '_blank'; a.rel = 'noopener nofollow'; });

  const revealItems = Array.from(root.querySelectorAll('[data-gxr]'));
  if (revealItems.length && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('repair-reveals-on');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  renderSymptoms(activeSystem);
})();
