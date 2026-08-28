import type { Metadata } from 'next';
import ContactPage from '@/components/ContactPage';

export const metadata: Metadata = {
  title: 'Contact | Pátio Justa Limoeiro',
  description:
    'Contact Pátio Justa Limoeiro for direct booking requests in Santa Justa, Coruche.',
};

export default function Page() {
  return <ContactPage locale="en" />;
}
