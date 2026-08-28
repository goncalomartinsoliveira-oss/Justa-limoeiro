import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Pátio Justa Limoeiro | Alojamiento Local en Santa Justa, Coruche',
  description:
    'Casa con piscina exterior, jardín con limonero y a 15 minutos de la Presa de Montargil. Reserve su estancia en Santa Justa, Coruche.',
};

export default function Page() {
  return <HomePage locale="es" />;
}
