
import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CryptoCalcGrid - Free Crypto Calculators',
    short_name: 'CryptoCalcGrid',
    description:
      '15 free cryptocurrency calculators for profit, DCA, staking, market cap, trading fees, and more.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    lang: 'en',
  };
}

