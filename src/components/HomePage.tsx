import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import { home } from '@/data/home';
import { localePath } from '@/lib/i18n';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

interface HomePageProps {
  locale: Locale;
}

export default function HomePage({ locale }: HomePageProps) {
  const t = home[locale];

  return (
    <>
      <SiteHeader locale={locale} currentPage="home" />

      <section className="hero">
        <div className="hero__media">
          <img src="/images/placeholder-hero.svg" alt="" />
          <span className="hero__placeholder-badge">Foto a substituir</span>
        </div>
        <div className="container hero__content">
          <span className="eyebrow hero__eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero__title">{t.hero.title}</h1>
          <p className="hero__subtitle">{t.hero.subtitle}</p>
          <div className="hero__ctas">
            <a href="#booking" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#welcome" className="btn">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="facts">
        {t.facts.map((f) => (
          <div className="facts__item" key={f.label}>
            {f.label}
          </div>
        ))}
      </section>

      <section className="section" id="welcome">
        <div className="container split">
          <div className="split__media">
            <img src="/images/placeholder-garden.svg" alt="" />
          </div>
          <div className="split__content">
            <span className="eyebrow">{t.welcome.eyebrow}</span>
            <h2>{t.welcome.title}</h2>
            {t.welcome.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">{t.spaces.eyebrow}</span>
            <h2>{t.spaces.title}</h2>
          </div>
          <div className="gallery-grid">
            {t.spaces.items.map((item) => (
              <div className="gallery-grid__item" key={item.caption}>
                <img src={item.image} alt={item.alt} />
                <span className="gallery-grid__caption">{item.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">{t.amenities.eyebrow}</span>
            <h2>{t.amenities.title}</h2>
            <p>{t.amenities.intro}</p>
          </div>
          <ul className="amenities-list">
            {t.amenities.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split split--reverse">
          <div className="split__media">
            <img src="/images/placeholder-montargil.svg" alt="" />
          </div>
          <div className="split__content">
            <span className="eyebrow">{t.location.eyebrow}</span>
            <h2>{t.location.title}</h2>
            <p>{t.location.paragraph}</p>
            <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
              {t.location.address}
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">{t.booking.eyebrow}</span>
            <h2>{t.booking.title}</h2>
            <p>{t.booking.paragraph}</p>
          </div>

          <div className="booking-grid">
            <div className="booking-card">
              <h3>{t.booking.bookingCta}</h3>
              <a
                href={t.booking.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {t.booking.bookingCta}
              </a>
            </div>

            <div className="booking-card">
              <h3>{t.booking.directTitle}</h3>
              <p>{t.booking.directParagraph}</p>
              <Link href={localePath(locale, '/contact')} className="btn btn-primary">
                {t.booking.directCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} />
    </>
  );
}
