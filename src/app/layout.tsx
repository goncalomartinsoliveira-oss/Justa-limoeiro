import type { Metadata } from 'next';
import HtmlLangSetter from '@/components/HtmlLangSetter';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Pátio Justa Limoeiro',
  description:
    'Pátio Justa Limoeiro — alojamento local em Santa Justa, Coruche, com piscina exterior, jardim com limoeiro e a 15 minutos da Barragem de Montargil.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <HtmlLangSetter />
        {children}
      </body>
    </html>
  );
}
