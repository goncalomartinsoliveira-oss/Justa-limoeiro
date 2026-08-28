import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';

export const metadata: Metadata = {
  title: 'Guía del Huésped | Pátio Justa Limoeiro',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <GuidePage locale="es" />;
}
