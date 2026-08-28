import type { Locale } from '@/lib/i18n';
import { galleryPageText } from '@/data/gallery';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import GalleryFilter from './GalleryFilter';

interface GalleryPageProps {
  locale: Locale;
}

export default function GalleryPage({ locale }: GalleryPageProps) {
  const t = galleryPageText[locale];

  return (
    <>
      <SiteHeader locale={locale} currentPage="gallery" />

      <div className="container poi-hero">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>

      <div className="container section--tight">
        <GalleryFilter locale={locale} />
      </div>

      <SiteFooter locale={locale} />
    </>
  );
}
