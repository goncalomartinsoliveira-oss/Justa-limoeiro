import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contacto | Pátio Justa Limoeiro',
  description:
    'Contacte con Pátio Justa Limoeiro para solicitudes de reserva directa en Santa Justa, Coruche.',
};

export default function Page() {
  return <ContactPage locale="es" />;
}
