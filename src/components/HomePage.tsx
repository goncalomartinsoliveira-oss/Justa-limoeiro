import type { Locale } from '@/lib/i18n';
import Link from 'next/link';
import { home } from '@/data/home';
import { localePath } from '@/lib/i18n';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import {
  IconBed,
  IconExpand,
  IconFamily,
  IconGroup,
  IconHome,
  IconCalendar,
  IconPool,
  IconStar,
  IconWifi,
} from './icons';

const factIcons = {
  bedrooms: IconBed,
  guests: IconFamily,
  private: IconHome,
  area: IconExpand,
  pool: IconPool,
  wifi: IconWifi,
} as const;

const perfectForIcons = {
  weekend: IconCalendar,
  family: IconFamily,
  friends: IconGroup,
} as const;

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
          <img src="/images/hero-pool.jpg" alt="" />
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
        <div className="container facts__grid">
          {t.facts.map((f) => {
            const Icon = factIcons[f.icon];
            return (
              <div className="facts__item" key={f.label}>
                <span className="facts__icon">
                  <Icon />
                </span>
                <span>{f.label}</span>
              </div>
            );
          })}
        </div>
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
                <div className="gallery-grid__media">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="gallery-grid__body">
                  <h3>{item.caption}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">{t.rooms.eyebrow}</span>
            <h2>{t.rooms.title}</h2>
            <p>{t.rooms.intro}</p>
          </div>
          <div className="perfect-for">
            {t.rooms.items.map((item) => (
              <div className="perfect-for__item" key={item}>
                <span className="perfect-for__icon">
                  <IconBed />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--reverse">
          <div className="split__media">
            <img src="/images/placeholder-interior.svg" alt="" />
          </div>
          <div className="split__content">
            <span className="eyebrow">{t.interior.eyebrow}</span>
            <h2>{t.interior.title}</h2>
            {t.interior.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight section--sand">
        <div className="container">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">{t.perfectFor.eyebrow}</span>
            <h2>{t.perfectFor.title}</h2>
          </div>
          <div className="perfect-for">
            {t.perfectFor.items.map((item) => {
              const Icon = perfectForIcons[item.icon];
              return (
                <div className="perfect-for__item" key={item.label}>
                  <span className="perfect-for__icon">
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                </div>
              );
            })}
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

      <section className="section section--tight">
        <div className="container social-proof">
          <span className="social-proof__stars">
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
            <IconStar />
          </span>
          <span className="eyebrow">{t.socialProof.eyebrow}</span>
          <h2>{t.socialProof.title}</h2>
          <p>{t.socialProof.text}</p>
          <a
            href={t.booking.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            {t.socialProof.cta}
          </a>
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
