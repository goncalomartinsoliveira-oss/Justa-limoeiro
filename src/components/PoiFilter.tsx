'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import { poiCategories, poiEntries, poiPageText, type PoiCategory } from '@/data/poi';

interface PoiFilterProps {
  locale: Locale;
}

const categoryOrder: PoiCategory[] = ['nature', 'culture', 'gastronomy', 'activities'];

export default function PoiFilter({ locale }: PoiFilterProps) {
  const [active, setActive] = useState<PoiCategory | 'all'>('all');
  const t = poiPageText[locale];

  const visible =
    active === 'all' ? poiEntries : poiEntries.filter((entry) => entry.category === active);

  return (
    <div>
      <div className="poi-filters">
        <button
          type="button"
          className={`poi-filter-btn${active === 'all' ? ' is-active' : ''}`}
          onClick={() => setActive('all')}
        >
          {t.filterAll}
        </button>
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`poi-filter-btn${active === cat ? ' is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {poiCategories[cat][locale]}
          </button>
        ))}
      </div>

      <div className="poi-grid">
        {visible.map((entry) => (
          <div
            className={`poi-card${entry.confirmed ? '' : ' poi-card--placeholder'}`}
            key={entry.slug}
          >
            <div className="poi-card__image">
              <img src={entry.image} alt={entry.name[locale]} />
              {!entry.confirmed && (
                <span className="poi-card__badge">{t.comingSoonBadge}</span>
              )}
            </div>
            <div className="poi-card__body">
              <span className="poi-card__category">{poiCategories[entry.category][locale]}</span>
              <h3 className="poi-card__name">{entry.name[locale]}</h3>
              <div className="poi-card__distance">{entry.distance[locale]}</div>
              <p className="poi-card__description">{entry.description[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
