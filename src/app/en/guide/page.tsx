import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Guest Guide | Pátio Justa Limoeiro',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GuidePage locale="en" />;
}
