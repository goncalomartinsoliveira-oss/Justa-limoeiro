import type { Metadata } from 'next';
import GalleryPage from '@/components/GalleryPage';

export const metadata: Metadata = {
  title: 'Gallery | Pátio Justa Limoeiro',
  description:
    'Discover the spaces at Pátio Justa Limoeiro: pool, garden, interior and covered outdoor area.',
};

export default function Page() {
  return <GalleryPage locale="en" />;
}
