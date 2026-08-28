import type { Metadata } from 'next';
import GalleryPage from '@/components/GalleryPage';

export const metadata: Metadata = {
  title: 'Galeria | Pátio Justa Limoeiro',
  description:
    'Conheça os espaços do Pátio Justa Limoeiro: piscina, jardim, interior e zona exterior coberta.',
};

export default function Page() {
  return <GalleryPage locale="pt" />;
}
