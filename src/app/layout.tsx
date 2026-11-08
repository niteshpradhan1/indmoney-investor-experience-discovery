import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'INDMoney Investor Experience Discovery',
  description: 'Human-centred investor research and product discovery workspace',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
