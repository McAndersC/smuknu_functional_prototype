import Navigation from '@/components/navigation/navigation';
import './globals.css'
import { quickFont } from '@/utils/fonts';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quickFont.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
