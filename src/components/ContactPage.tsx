import type { Locale } from '@/lib/i18n';
import { contact } from '@/data/contact';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import BookingForm from './BookingForm';

interface ContactPageProps {
  locale: Locale;
}

export default function ContactPage({ locale }: ContactPageProps) {
  const t = contact[locale];

  return (
    <>
      <SiteHeader locale={locale} currentPage="contact" />

      <div className="container poi-hero">
        <span className="eyebrow">{t.eyebrow}</span>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </div>

      <div className="container section--tight">
        <div className="booking-grid">
          <div className="booking-card">
            <BookingForm fields={t.fields} formNote={t.formNote} />
          </div>

          <div className="booking-card">
            <h3>{t.bookingNote}</h3>
            <a
              href={t.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {t.bookingCta}
            </a>
          </div>
        </div>
      </div>

      <SiteFooter locale={locale} />
    </>
  );
}
