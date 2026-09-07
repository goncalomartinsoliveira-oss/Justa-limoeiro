import type { Locale } from '@/lib/i18n';
import { contact } from '@/data/contact';
import { contactEmail, phoneDisplay, whatsappNumber } from '@/data/social';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import BookingForm from './BookingForm';
import SocialLinks from './SocialLinks';
import { IconMail, IconPhone } from './icons';

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
            <BookingForm
              fields={t.fields}
              formNote={t.formNote}
              successMessage={t.successMessage}
              errorMessage={t.errorMessage}
            />
          </div>

          <div className="booking-card">
            <h3>{t.contactHeading}</h3>
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
