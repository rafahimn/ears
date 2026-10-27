'use client';

import { useMemo, useState } from 'react';
import { services } from '../lib/site';
import { ServiceCard } from './ServiceCard';

type FilterId = 'all' | 'doors' | 'shade' | 'automation';
const groupBySlug: Record<string, Exclude<FilterId, 'all'>> = {
  shutter: 'doors', garage: 'doors', polycarbonate: 'doors',
  awning: 'shade', canopy: 'shade', 'aluminium-works': 'shade', 'steel-work': 'shade',
  motor: 'automation', repair: 'automation',
};
const filters: { id: FilterId; label: string; description: string }[] = [
  { id: 'all', label: 'All services', description: 'Complete range' },
  { id: 'doors', label: 'Doors & shutters', description: 'Secure openings' },
  { id: 'shade', label: 'Shade & fabrication', description: 'Custom projects' },
  { id: 'automation', label: 'Automation & repair', description: 'Controls and support' },
];

export function ServicesDirectory() {
  const [active, setActive] = useState<FilterId>('all');
  const visibleServices = useMemo(
    () => services.filter((service) => active === 'all' || groupBySlug[service.slug] === active),
    [active],
  );

  return (
    <div className="services-directory">
      <div className="services-directory-toolbar">
        <div className="services-directory-toolbar-copy">
          <span className="services-mini-kicker">BROWSE BY REQUIREMENT</span>
          <h3>Find the right service <em>for your project.</em></h3>
          <p>Select a category to narrow the options, or explore the complete service range.</p>
        </div>
        <div className="services-filter-tabs" role="group" aria-label="Filter services by category">
          {filters.map((filter) => {
            const count = filter.id === 'all'
              ? services.length
              : services.filter((service) => groupBySlug[service.slug] === filter.id).length;
            return (
              <button
                key={filter.id}
                type="button"
                className={`services-filter-tab${active === filter.id ? ' is-active' : ''}`}
                aria-pressed={active === filter.id}
                onClick={() => setActive(filter.id)}
              >
                <span>{filter.label}<small>{filter.description}</small></span>
                <b>{String(count).padStart(2, '0')}</b>
              </button>
            );
          })}
        </div>
      </div>
      <div className="service-grid-premium services-page-grid" aria-live="polite">
        {visibleServices.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}
      </div>
      <div className="services-directory-bottom">
        <span><i /> Showing <strong>{visibleServices.length}</strong> of {services.length} service categories</span>
        <a href="#service-request">Need help choosing? Start a quote <b aria-hidden="true">→</b></a>
      </div>
    </div>
  );
}
