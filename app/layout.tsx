import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ANL',
  description: 'ANL delivers integrated shipping and logistics solutions across the Asia-Pacific, Middle East, and North America. Track shipments, get quotes, and manage your cargo online.',
  icons: {
    icon: '/images/anl-favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-full flex flex-col bg-white`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
