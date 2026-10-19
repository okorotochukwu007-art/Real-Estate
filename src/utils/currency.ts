/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CurrencyCode = 'NGN' | 'USD' | 'GBP' | 'EUR' | 'CAD';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rateToNgn: number; // How many NGN per 1 unit of foreign currency
  label: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  NGN: {
    code: 'NGN',
    symbol: '₦',
    rateToNgn: 1,
    label: 'NGN (₦)'
  },
  USD: {
    code: 'USD',
    symbol: '$',
    rateToNgn: 1480,
    label: 'USD ($)'
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    rateToNgn: 1920,
    label: 'GBP (£)'
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    rateToNgn: 1600,
    label: 'EUR (€)'
  },
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    rateToNgn: 1080,
    label: 'CAD ($)'
  }
};

export function formatPriceInCurrency(priceInNgn: number, currency: CurrencyCode): string {
  const config = CURRENCIES[currency];
  if (currency === 'NGN') {
    return `₦${priceInNgn.toLocaleString('en-NG')}`;
  }
  const converted = Math.round(priceInNgn / config.rateToNgn);
  return `${config.symbol}${converted.toLocaleString('en-US')}`;
}
