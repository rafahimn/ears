import { sitePath } from '../lib/paths';
import Link from 'next/link';
import { FAQ } from './FAQ';
import { Icon } from './Icon';
import { Reveal } from './Reveal';
import { OriginalServiceInfo } from './OriginalServiceInfo';
import { serviceDetails, services, waLink } from '../lib/site';

type Presentation = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  imageLabel: string;
  imageNote: string;
  tags: string[];
  benefits: string[];
  process: { title: string; text: string }[];
};

const presentations: Record<string, Presentation> = {
  awning: {
    eyebrow: 'OUTDOOR SHADE, REIMAGINED',
    title: 'Awning installation for',
    highlight: 'Dubai outdoor spaces.',
    intro: 'Tailor-made fixed, retractable and motorised awnings for balconies, terraces, patios, cafés and villas—planned around your shade requirements, projection and mounting conditions.',
    imageLabel: 'Shade that moves with your day',
    imageNote: 'Retractable · Fixed · Motorised',
    tags: ['Custom projection', 'Manual or motorised', 'Fabric & frame options'],
    benefits: ['Comfortable outdoor living', 'Flexible shade control', 'Fabric and motor repair support'],
    process: [
      { title: 'Plan the shade', text: 'Review sun exposure, coverage, projection and mounting points.' },
      { title: 'Select the system', text: 'Compare fixed, retractable and motorised options for the space.' },
      { title: 'Measure & prepare', text: 'Confirm dimensions, fabric, frame finish and access.' },
      { title: 'Fit & check', text: 'Install, test movement and explain the operating controls.' },
    ],
  },
  canopy: {
    eyebrow: 'ARCHITECTURAL SHADE SYSTEMS',
    title: 'Car parking & entrance',
    highlight: 'canopies in Dubai.',
    intro: 'Custom canopy systems for villa entrances, car parks, walkways, terraces and commercial spaces. Each project is planned around coverage, structure, access and the look of the property.',
    imageLabel: 'Coverage designed for the space',
    imageNote: 'Parking · Entrances · Walkways',
    tags: ['Custom dimensions', 'Steel or aluminium', 'Fabric options'],
    benefits: ['Useful shade and weather protection', 'Structure and finish choices', 'Residential and commercial projects'],
    process: [
      { title: 'Understand the site', text: 'Review footprint, access, fixing points and coverage needs.' },
      { title: 'Specify the structure', text: 'Choose a suitable frame, roof/shade material and finish.' },
      { title: 'Fabricate to plan', text: 'Prepare custom dimensions and coordinate installation.' },
      { title: 'Install & inspect', text: 'Complete fitting and confirm the finished scope on site.' },
    ],
  },
  'steel-work': {
    eyebrow: 'CUSTOM METAL FABRICATION',
    title: 'Steel fabrication',
    highlight: 'for Dubai projects.',
    intro: 'Steel fabrication for gates, pergola frames, canopy structures, parking areas and custom metalwork. We plan dimensions, use, access and finishing before fabrication begins.',
    imageLabel: 'Fabricated for the real-world load and layout',
    imageNote: 'Gates · Frames · Structures',
    tags: ['Project-led dimensions', 'Welding & fabrication', 'Finish options'],
    benefits: ['Custom structural layouts', 'Coordinated fabrication and fitting', 'Residential and commercial applications'],
    process: [
      { title: 'Review the requirement', text: 'Confirm use, dimensions, support conditions and site access.' },
      { title: 'Plan & specify', text: 'Agree the layout, material and appropriate finish.' },
      { title: 'Fabricate', text: 'Prepare the components against the approved project scope.' },
      { title: 'Fit & inspect', text: 'Coordinate installation, alignment and final checks.' },
    ],
  },
  'aluminium-works': {
    eyebrow: 'MODERN ALUMINIUM SOLUTIONS',
    title: 'Aluminium doors & windows',
    highlight: 'for Dubai properties.',
    intro: 'Made-to-measure aluminium doors, windows, partitions, cladding and custom fabrication for homes, offices, shops and commercial properties—with finish and function planned together.',
    imageLabel: 'Precision details for modern properties',
    imageNote: 'Doors · Windows · Partitions',
    tags: ['Custom sizes', 'Modern finishes', 'Supply & installation'],
    benefits: ['A neat, contemporary finish', 'Layouts tailored to the opening', 'One coordinated fabrication process'],
    process: [
      { title: 'Measure the opening', text: 'Record dimensions, levels, clearances and site conditions.' },
      { title: 'Choose the details', text: 'Confirm frame design, finish, hardware and intended use.' },
      { title: 'Fabricate accurately', text: 'Prepare the assembly against the approved dimensions.' },
      { title: 'Install & adjust', text: 'Fit, align and check operation before handover.' },
    ],
  },
  polycarbonate: {
    eyebrow: 'TRANSPARENT SHUTTER SYSTEMS',
    title: 'Clear polycarbonate',
    highlight: 'roller shutters in Dubai.',
    intro: 'Transparent polycarbonate roller shutters for selected shops, showrooms and retail displays where visibility matters even after closing. The opening, guides and operating method are reviewed before specification.',
    imageLabel: 'Visibility after closing time',
    imageNote: 'Clear slats · Shopfronts · Showrooms',
    tags: ['Display visibility', 'Profile-led specification', 'Manual or motorised'],
    benefits: ['Keeps products and displays visible', 'A considered solution for retail fronts', 'Opening and guide details checked first'],
    process: [
      { title: 'Share the frontage', text: 'Send photos, approximate dimensions and property details.' },
      { title: 'Review the system', text: 'Confirm slat profile, guides, supports and operating needs.' },
      { title: 'Plan the installation', text: 'Agree the approved configuration and site preparation.' },
      { title: 'Fit & test', text: 'Install, check curtain travel and explain care requirements.' },
    ],
  },
};

const proof = [
  { n: '01', title: 'Designed for the site', text: 'Dimensions, mounting points and access are reviewed before the final specification.' },
  { n: '02', title: 'Options made clear', text: 'Compare practical materials, finishes and operating choices for your project.' },
  { n: '03', title: 'Scope confirmed', text: 'The installation scope and quotation are clarified before work proceeds.' },
  { n: '04', title: 'Support after fitting', text: 'Operation checks and relevant care guidance are included at handover.' },
];

export function PremiumCraftService({ slug }: { slug: string }) {
  const detail = serviceDetails[slug];
  const view = presentations[slug];
  if (!detail || !view) return null;
  const relatedServices = services.filter((service) => service.slug !== slug).slice(0, 3);

  return (
    <main className={`craft-page craft-page--${slug}`}>
      <section className="craft-hero-wrap">
        <div className="container">
          <div className="craft-hero">
            <div className="craft-hero-copy">
              <div className="craft-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/services/">Services</Link><span>/</span><b>{detail.title.split(' ').slice(0, 3).join(' ')}</b></div>
              <span className="craft-eyebrow"><i />{view.eyebrow}</span>
              <h1>{view.title} <em>{view.highlight}</em></h1>
              <p className="craft-lead">{detail.intro}</p>
              <div className="craft-hero-actions">
                <a className="btn btn-gold" href={waLink(`Hello, I would like a quotation for ${detail.title}. ${view.tags.join(', ')}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Get a Project Quote</a>
                <a className="btn btn-outline-dark" href="#craft-options">Explore Options <Icon name="arrow" /></a>
              </div>
              <div className="craft-tag-row">{view.tags.map((tag) => <span key={tag}><Icon name="check" />{tag}</span>)}</div>
              <div className="craft-hero-foot"><span><Icon name="ruler" /> Site-led planning</span><span><Icon name="shield" /> Clear scope first</span><span><Icon name="wrench" /> Installation support</span></div>
            </div>
            <div className="craft-hero-visual">
              <div className="craft-visual-image"><img src={sitePath(detail.image)} alt={`${detail.title} — Emirates Aluminium Shutter LLC project reference`} /></div>
              <div className="craft-visual-grain" aria-hidden="true" />
              <div className="craft-visual-index"><b>{services.find((s) => s.slug === slug)?.accent ?? '01'}</b><span>PROJECT<br />SPECIFICATION</span></div>
              <div className="craft-visual-caption"><span className="craft-caption-icon"><Icon name="spark" /></span><span><b>{view.imageLabel}</b><small>{view.imageNote}</small></span><span className="craft-caption-arrow"><Icon name="arrow" /></span></div>
              <div className="craft-orbit craft-orbit-one" aria-hidden="true" />
              <div className="craft-orbit craft-orbit-two" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="craft-proof-band" aria-label="Project approach">
        <div className="container craft-proof-grid">{proof.map((item) => <article key={item.n}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section className="section craft-options-section" id="craft-options">
        <div className="container">
          <Reveal><div className="craft-section-heading"><div><span className="craft-overline">OPTIONS FOR YOUR PROPERTY</span><h2>Good design starts with <em>the right details.</em></h2></div><p>Every opening and outdoor area is different. Start with the project priorities below, then share a few photos or measurements for a more relevant recommendation.</p></div></Reveal>
          <div className="craft-benefit-grid">{detail.bullets.slice(0, 6).map((item, i) => <Reveal key={item} delay={i * 45}><article className="craft-benefit-card"><span className="craft-benefit-number">{String(i + 1).padStart(2, '0')}</span><span className="craft-benefit-icon"><Icon name={i % 3 === 0 ? 'ruler' : i % 3 === 1 ? 'shield' : 'spark'} /></span><h3>{item}</h3><p>{view.benefits[i % view.benefits.length]}</p><span className="craft-card-line" /></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section craft-story-section">
        <div className="container">
          <Reveal><div className="craft-section-heading craft-section-heading-dark"><div><span className="craft-overline">THOUGHT THROUGH, STEP BY STEP</span><h2>From first idea to <em>finished installation.</em></h2></div><p>Review the key considerations for this service. The final specification is based on the actual site, selected materials and agreed work scope.</p></div></Reveal>
          <div className="craft-story-list">{detail.sections.map((item, i) => <Reveal key={item.title} delay={i * 55}><article className={`craft-story-row ${i % 2 ? 'craft-story-row-reverse' : ''}`}>
            <div className="craft-story-visual"><img src={sitePath(detail.gallery[i % detail.gallery.length] || detail.image)} alt={`${item.title} visual reference`} loading="lazy"/><div className="craft-story-visual-overlay"/><span className="craft-story-number">{String(i + 1).padStart(2, '0')}</span><div className="craft-story-visual-label"><span>{item.kicker || view.eyebrow}</span><b>{i === 0 ? 'DESIGN' : i === 1 ? 'SPECIFY' : i === 2 ? 'PREPARE' : 'DELIVER'}</b></div></div>
            <div className="craft-story-copy"><span className="craft-overline">{item.kicker || 'SERVICE DETAIL'}</span><h3>{item.title}</h3><p>{item.text}</p>{item.items && <ul>{item.items.map((entry) => <li key={entry}><Icon name="check" />{entry}</li>)}</ul>}<a href={waLink(`Hello, please advise me about ${item.title} for ${detail.title}.`)} target="_blank" rel="noreferrer" className="craft-text-link">Discuss this requirement <Icon name="arrow" /></a></div>
          </article></Reveal>)}</div>
        </div>
      </section>

      <section className="section craft-process-section">
        <div className="container">
          <Reveal><div className="craft-section-heading"><div><span className="craft-overline">A CLEAR PROJECT JOURNEY</span><h2>Four steps. <em>No guesswork.</em></h2></div><p>Share your needs first. Measurements and site conditions help the team confirm the most appropriate system and quotation.</p></div></Reveal>
          <div className="craft-process-grid">{view.process.map((step, i) => <Reveal key={step.title} delay={i * 70}><article className="craft-process-card"><span className="craft-process-step">0{i + 1}</span><span className="craft-process-rule"/><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section craft-gallery-section">
        <div className="container">
          <Reveal><div className="craft-section-heading"><div><span className="craft-overline">VISUAL REFERENCES</span><h2>Explore the <em>details and finishes.</em></h2></div><p>Images are illustrative project references. Final appearance, material and dimensions are confirmed for each specific requirement.</p></div></Reveal>
          <div className="craft-gallery-grid">{detail.gallery.map((src, i) => <a href={sitePath(src)} target="_blank" rel="noreferrer" key={`${src}-${i}`} className={`craft-gallery-item craft-gallery-item-${i + 1}`}><img src={sitePath(src)} alt={`${detail.title} example ${i + 1}`} loading="lazy"/><span><b>{String(i + 1).padStart(2, '0')}</b><Icon name="arrow" /></span></a>)}</div>
        </div>
      </section>

      <OriginalServiceInfo slug={slug} label="Additional service information & project details" />

      <section className="section craft-faq-section"><div className="container craft-faq-layout"><Reveal><div className="craft-faq-copy"><span className="craft-overline">BEFORE YOU START</span><h2>Questions, <em>answered clearly.</em></h2><p>Have photos, approximate dimensions and your location ready? Send them through WhatsApp for an initial discussion about your project.</p><a className="btn btn-gold" href={waLink(`Hello, I have a question about ${detail.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Ask about this service</a><div className="craft-faq-note"><Icon name="shield" /><span><b>Clear quotation before work</b><small>Scope and applicable terms are confirmed before approval.</small></span></div></div></Reveal><FAQ items={detail.faqs}/></div></section>

      <section className="section craft-final-section"><div className="container"><Reveal><div className="craft-final-cta"><div className="craft-final-shine" aria-hidden="true"/><div className="craft-final-copy"><span className="craft-overline">LET'S PLAN YOUR PROJECT</span><h2>Have a space in mind? <em>Let's shape it.</em></h2><p>Send a few photos, approximate size and your location. The team can help you discuss a suitable solution and confirm the next step.</p></div><div className="craft-final-actions"><a className="btn btn-gold" href={waLink(`Hello, I would like to discuss a project for ${detail.title}.`)} target="_blank" rel="noreferrer"><Icon name="whatsapp" /> Start a WhatsApp Quote</a><Link className="btn btn-outline-light" href="/services/">Browse all services <Icon name="arrow" /></Link></div></div></Reveal></div></section>

      <section className="craft-related-section"><div className="container craft-related-inner"><span className="craft-overline">MORE SOLUTIONS</span><div className="craft-related-row"><h2>Explore related services</h2><div>{relatedServices.map((service) => <Link key={service.slug} href={`/${service.slug}/`}>{service.title}<Icon name="arrow" /></Link>)}</div></div></div></section>
    </main>
  );
}
