'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n';
import {
  galleryCategoryContent,
  galleryCategoryLabels,
  galleryImages,
  type GalleryCategory,
} from '@/data/gallery';

interface GalleryFilterProps {
  locale: Locale;
}

const categoryOrder: GalleryCategory[] = ['pool', 'garden', 'interior', 'outdoor'];

export default function GalleryFilter({ locale }: GalleryFilterProps) {
  const [active, setActive] = useState<GalleryCategory>('pool');
  const content = galleryCategoryContent[active][locale];
  const images = galleryImages[active];

  return (
    <div>
      <div className="gallery-tabs">
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`gallery-tab${active === cat ? ' is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {galleryCategoryLabels[cat][locale]}
          </button>
        ))}
      </div>

      <div className="gallery-category-header">
        <span className="eyebrow">{galleryCategoryLabels[active][locale]}</span>
        <h2 className="gallery-script">{content.tagline}</h2>
        <p>{content.paragraph}</p>
        <span className="link-underline">{content.linkLabel}</span>
      </div>

      <div className="gallery-masonry">
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt[locale]} />
        ))}
      </div>
    </div>
  );
}
