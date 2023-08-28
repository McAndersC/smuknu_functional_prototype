import Navigation from '@/components/navigation/navigation';
import './globals.css'
import { quickFont } from '@/utils/fonts';
import Footer from '@/components/footer/footer';


export const metadata = {
  title: 'Smuk Nu',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickFont.className}>
        <Navigation />
          {children}
        <Footer />
      </body>
    </html>
  )
}
