import type { Metadata } from 'next';
import GalleryPage from '@/components/GalleryPage';

export const metadata: Metadata = {
  title: 'Galería | Pátio Justa Limoeiro',
  description:
    'Descubra los espacios de Pátio Justa Limoeiro: piscina, jardín, interior y zona exterior cubierta.',
};

export default function Page() {
  return <GalleryPage locale="es" />;
}
