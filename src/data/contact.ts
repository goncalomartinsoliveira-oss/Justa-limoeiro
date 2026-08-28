import type { Locale } from '@/lib/i18n';

export interface ContactContent {
  eyebrow: string;
  title: string;
  intro: string;
  contactHeading: string;
  bookingNote: string;
  bookingCta: string;
  bookingUrl: string;
  formNote: string;
  fields: {
    name: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    message: string;
    submit: string;
  };
}

export const contact: Record<Locale, ContactContent> = {
  pt: {
    eyebrow: 'Contactos',
    title: 'Vamos combinar a sua estadia',
    intro:
      'Preencha o formulário abaixo com os detalhes da sua estadia e entraremos em contacto para confirmar a reserva.',
    contactHeading: 'Outros contactos',
    bookingNote: 'Prefere reservar através do Booking.com?',
    bookingCta: 'Ver Disponibilidade no Booking.com',
    bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.pt-pt.html',
    formNote: 'Formulário de contacto. Brevemente com envio automático de email.',
    fields: {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      checkIn: 'Data de Check-in',
      checkOut: 'Data de Check-out',
      guests: 'Número de Hóspedes',
      message: 'Mensagem (opcional)',
      submit: 'Enviar Pedido',
    },
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's plan your stay",
    intro:
      'Fill in the form below with your stay details and we will get back to you to confirm the booking.',
    contactHeading: 'Other ways to reach us',
    bookingNote: 'Prefer to book through Booking.com?',
    bookingCta: 'Check Availability on Booking.com',
    bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.en-gb.html',
    formNote: 'Contact form. Automatic email sending coming soon.',
    fields: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      checkIn: 'Check-in Date',
      checkOut: 'Check-out Date',
      guests: 'Number of Guests',
      message: 'Message (optional)',
      submit: 'Send Request',
    },
  },
  es: {
    eyebrow: 'Contacto',
    title: 'Organicemos su estancia',
    intro:
      'Complete el formulario a continuación con los detalles de su estancia y nos pondremos en contacto para confirmar la reserva.',
    contactHeading: 'Otras formas de contacto',
    bookingNote: '¿Prefiere reservar a través de Booking.com?',
    bookingCta: 'Ver Disponibilidad en Booking.com',
    bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.es.html',
    formNote: 'Formulario de contacto. Envío automático de email próximamente.',
    fields: {
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      checkIn: 'Fecha de Entrada',
      checkOut: 'Fecha de Salida',
      guests: 'Número de Huéspedes',
      message: 'Mensaje (opcional)',
      submit: 'Enviar Solicitud',
    },
  },
};
