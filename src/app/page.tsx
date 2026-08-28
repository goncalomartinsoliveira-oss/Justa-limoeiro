import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Pátio Justa Limoeiro | Alojamento Local em Santa Justa, Coruche',
  description:
    'Casa com piscina exterior, jardim com limoeiro e a 15 minutos da Barragem de Montargil. Reserve a sua estadia em Santa Justa, Coruche.',
};

export default function Page() {
  return <HomePage locale="pt" />;
}
