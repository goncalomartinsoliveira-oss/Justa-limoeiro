import Link from 'next/link';
import { locales, localeNames, localePath, type Locale } from '@/lib/i18n';
import { guide } from '@/data/guide';
import { home } from '@/data/home';
import { poiPageText } from '@/data/poi';
import { contactEmail, phoneDisplay, whatsappNumber } from '@/data/social';
import SocialLinks from './SocialLinks';
import PoiFilter from './PoiFilter';
import { IconMail, IconPhone, IconWifi } from './icons';

interface GuidePageProps {
  locale: Locale;
}

export default function GuidePage({ locale }: GuidePageProps) {
  const t = guide[locale];
  const h = home[locale];
  const poiText = poiPageText[locale];

  return (
    <>
      <header className="guide-header">
        <div className="container guide-header__inner">
          <span className="guide-header__brand">{h.hero.title}</span>
          <div className="site-header__langs" aria-label="Language switcher">
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 && <span className="site-header__lang-sep">/</span>}
                <Link href={localePath(l, '/guide')} className={l === locale ? 'is-active' : ''}>
                  {localeNames[l]}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="container poi-hero">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>

      <section className="section--tight">
        <div className="container booking-grid">
          <div className="booking-card">
            <h3>{t.aboutHeading}</h3>
            <ul className="contact-details__list">
              <li>
                <IconWifi />
                <span>
                  {t.wifiLabel}. {t.wifiNote}
                </span>
              </li>
            </ul>
            <p style={{ marginBottom: '1rem', color: 'var(--color-taupe)' }}>
              {t.addressLabel}: {h.location.address}
            </p>
            <h3 style={{ marginTop: '1.6rem' }}>{t.amenitiesHeading}</h3>
            <ul className="amenities-list amenities-list--single">
              {h.amenities.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="booking-card">
            <h3>{t.contactsHeading}</h3>
            <ul className="contact-details__list">
              <li>
                <IconPhone />
                <a href={`tel:+${whatsappNumber}`}>{phoneDisplay}</a>
              </li>
              <li>
                <IconMail />
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </li>
            </ul>
            <SocialLinks locale={locale} />
            <hr className="contact-details__divider" />
            <p>
              {t.emergencyLabel}: <strong>112</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="section--tight section--sand">
        <div className="container poi-hero" style={{ paddingTop: 0 }}>
          <span className="eyebrow">{poiText.eyebrow}</span>
          <h2>{poiText.title}</h2>
          <p>{poiText.intro}</p>
        </div>
        <div className="container">
          <PoiFilter locale={locale} />
        </div>
      </section>

      <footer className="guide-footer">
        <div className="container">
          <Link href={localePath(locale, '/')} className="link-underline">
            {t.backToSite}
          </Link>
        </div>
      </footer>
    </>
  );
}
