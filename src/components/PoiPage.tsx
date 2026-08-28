import type { Locale } from '@/lib/i18n';
import { poiPageText } from '@/data/poi';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import PoiFilter from './PoiFilter';

interface PoiPageProps {
  locale: Locale;
}

export default function PoiPage({ locale }: PoiPageProps) {
  const t = poiPageText[locale];

  return (
    <>
      <SiteHeader locale={locale} currentPage="explore" />

      <div className="container poi-hero">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>

      <div className="container section--tight">
        <PoiFilter locale={locale} />
      </div>

      <SiteFooter locale={locale} />
    </>
  );
}
