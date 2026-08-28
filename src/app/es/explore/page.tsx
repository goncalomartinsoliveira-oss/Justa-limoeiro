import type { Metadata } from 'next';
import PoiPage from '@/components/PoiPage';

export const metadata: Metadata = {
  title: 'Puntos de Interés | Pátio Justa Limoeiro',
  description:
    'Descubra la región de Santa Justa y Coruche: Presa de Montargil, naturaleza, cultura, gastronomía y actividades cerca de Pátio Justa Limoeiro.',
};

export default function Page() {
  return <PoiPage locale="es" />;
}
