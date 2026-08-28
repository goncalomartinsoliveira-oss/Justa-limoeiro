import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Pátio Justa Limoeiro | Local Guesthouse in Santa Justa, Coruche',
  description:
    'A house with an outdoor pool, a garden with a lemon tree, and a 15-minute drive from the Montargil Dam. Book your stay in Santa Justa, Coruche.',
};

export default function Page() {
  return <HomePage locale="en" />;
}
