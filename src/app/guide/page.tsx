import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Guia do Hóspede | Pátio Justa Limoeiro',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GuidePage locale="pt" />;
}
