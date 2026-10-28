
import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cryptocalcgrid.com'),
  title: {
    default: 'CryptoCalcGrid | 15 Free Cryptocurrency Calculators',
    template: '%s | CryptoCalcGrid'
  },
  description:
    'Explore 15 free cryptocurrency calculators for profit and loss, DCA, staking rewards, market cap, trading fees, token burns, mining profitability and more. Fast, easy-to-use crypto tools.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'CryptoCalcGrid | 15 Free Cryptocurrency Calculators',
    description:
      'Free cryptocurrency calculators for investors and traders. Calculate crypto profits, DCA, staking rewards, market cap, trading fees and more.',
    url: 'https://www.cryptocalcgrid.com',
    siteName: 'CryptoCalcGrid',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: 'c6uKtX4iLi4jwPv4ycmuJrcWIS0jB_GZCMRqxNH7jg8'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YM1WWSS3TD"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YM1WWSS3TD');
          `}
        </Script>

        <header className="site-header">
          <div className="shell header-inner">
            <Link className="brand" href="/">
              ↗ <span>Crypto<span className="accent">CalcGrid</span></span>
            </Link>

            <nav aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/#calculators">Calculators</Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="shell footer">
          © {new Date().getFullYear()} CryptoCalcGrid · Educational estimates, not financial advice.
        </footer>
      </body>
    </html>
  );
}
