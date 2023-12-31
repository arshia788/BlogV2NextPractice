import './globals.css';

import Layout from '/components/layout/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Providers
import StoreProvider from 'providers/StoreProvider';
import ToastProvider from 'providers/ToastProvider';


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='ltr'>
      <body className={inter.className}>
        <StoreProvider>
          <ToastProvider>
            <Layout>
              {children}
            </Layout>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
