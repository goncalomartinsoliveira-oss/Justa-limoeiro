import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contactos | Pátio Justa Limoeiro',
  description:
    'Contacte o Pátio Justa Limoeiro para pedidos de reserva direta em Santa Justa, Coruche.',
};

export default function Page() {
  return <ContactPage locale="pt" />;
}
