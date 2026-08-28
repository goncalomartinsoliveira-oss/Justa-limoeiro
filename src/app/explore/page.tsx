import type { Metadata } from 'next';
import PoiPage from '@/components/PoiPage';

export const metadata: Metadata = {
  title: 'Pontos de Interesse | Pátio Justa Limoeiro',
  description:
    'Descubra a região de Santa Justa e Coruche: Barragem de Montargil, natureza, cultura, gastronomia e atividades perto do Pátio Justa Limoeiro.',
};

export default function Page() {
  return <PoiPage locale="pt" />;
}
