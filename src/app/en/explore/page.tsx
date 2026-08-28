import type { Metadata } from 'next';
import PoiPage from '@/components/PoiPage';

export const metadata: Metadata = {
  title: 'Places to Visit | Pátio Justa Limoeiro',
  description:
    'Discover the Santa Justa and Coruche region: Montargil Dam, nature, culture, food and activities near Pátio Justa Limoeiro.',
};

export default function Page() {
  return <PoiPage locale="en" />;
}
