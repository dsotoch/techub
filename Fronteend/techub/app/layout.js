import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import ScrollToTopButton from '@/components/scroll';
import React, { Suspense } from 'react';
import LoadingComponent from './loading';
export const metadata = {
  title: 'TecHub',
  description: 'Web de techub',
};

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body>
        <Header />
        <Suspense fallback={<LoadingComponent />}>
          {children}
        </Suspense>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
