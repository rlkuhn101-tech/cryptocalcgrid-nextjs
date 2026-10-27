
'use client';

import { useState } from 'react';
import {
  dca,
  marketCap,
  profit,
  stakingRewards,
  type ToolSlug
} from '../lib/calculators';

const configs: Record<
  ToolSlug,
  { fields: { name: string; label: string; initial: number }[] }
> = {
  'crypto-profit-calculator': {
    fields: [
      { name: 'investment', label: 'Amount invested ($)', initial: 10000 },
      { name: 'buy', label: 'Purchase price ($)', initial: 2 },
      { name: 'sell', label: 'Selling price ($)', initial: 3.5 },
      { name: 'fees', label: 'Total trading fees ($)', initial: 0 }
    ]
  },

  'crypto-dca-calculator': {
    fields: [
      { name: 'amount', label: 'Amount per contribution ($)', initial: 50 },
      {
        name: 'frequency',
        label: 'Contributions per year (12 monthly, 52 weekly)',
        initial: 52
      },
      { name: 'years', label: 'Number of years', initial: 5 },
      { name: 'rate', label: 'Hypothetical annual return (%)', initial: 10 }
    ]
  },

  'crypto-market-cap-calculator': {
    fields: [
      { name: 'supply', label: 'Circulating supply (tokens)', initial: 1000000000 },
      { name: 'price', label: 'Current token price ($)', initial: 1 },
      {
        name: 'target',
        label: 'Target market capitalization ($)',
        initial: 5000000000
      }
    ]
  },

  'crypto-staking-rewards-calculator': {
    fields: [
      { name: 'tokens', label: 'Tokens staked', initial: 10000 },
      { name: 'apy', label: 'Annual percentage yield (APY %)', initial: 5 },
      { name: 'years', label: 'Staking duration (years)', initial: 3 },
      { name: 'tokenPrice', label: 'Token price ($)', initial: 2 }
    ]
  }
};

const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(n);

const number = (n: number) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 8
  }).format(n);

export default function Calculator({ slug }: { slug: ToolSlug }) {
  const config = configs[slug];

  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      config.fields.map(f => [f.name, String(f.initial)])
    )
  );

  const get = (name: string) => Number(values[name]);

  const valid = config.fields.every(
    f => values[f.name].trim() !== '' && Number.isFinite(get(f.name))
  );

  let rows: [string, string][] = [];
  let error = '';

  if (valid) {
    if (slug === 'crypto-profit-calculator') {
      const r = profit(
        get('investment'),
        get('buy'),
        get('sell'),
        get('fees')
      );

      if (r) {
        rows = [
          ['Tokens acquired', number(r.tokens)],
          ['Gross sale value', money(r.proceeds)],
          ['Net profit / loss', money(r.gain)],
          ['Return on investment', `${r.roi.toFixed(2)}%`]
        ];
      } else {
        error = 'Enter nonnegative values and a purchase price greater than zero.';
      }
    }

    if (slug === 'crypto-dca-calculator') {
      const frequency = get('frequency');

      const r =
        Number.isInteger(frequency) &&
        frequency >= 1 &&
        frequency <= 365
          ? dca(
              get('amount'),
              frequency,
              get('years'),
              get('rate')
            )
          : null;

      if (r) {
        rows = [
          ['Total invested', money(r.principal)],
          ['Projected value', money(r.future)],
          ['Projected gain / loss', money(r.gain)]
        ];
      } else {
        error =
          'Enter a valid frequency (1–365), time horizon (up to 50 years), and annual return greater than −100%.';
      }
    }

    if (slug === 'crypto-market-cap-calculator') {
      const r = marketCap(
        get('supply'),
        get('price'),
        get('target')
      );

      if (r) {
        rows = [
          ['Current market cap', money(r.currentCap)],
          ['Price at target market cap', money(r.impliedPrice)]
        ];
      } else {
        error =
          'Supply must be greater than zero; prices and market caps cannot be negative.';
      }
    }

    if (slug === 'crypto-staking-rewards-calculator') {
      const r = stakingRewards(
        get('tokens'),
        get('apy'),
        get('years'),
        get('tokenPrice')
      );

      if (r) {
        rows = [
          ['Initial tokens staked', number(r.initialTokens)],
          ['Estimated reward tokens', number(r.rewardTokens)],
          ['Total tokens after staking', number(r.finalTokens)],
          ['Initial dollar value', money(r.initialValue)],
          ['Estimated rewards value', money(r.rewardValue)],
          ['Estimated final value', money(r.finalValue)]
        ];
      } else {
        error =
          'Enter valid nonnegative amounts, an APY of 0–1000%, and a staking duration of 0–50 years.';
      }
    }
  } else {
    error = 'Enter a valid number in every field.';
  }

  return (
    <div className="calc-layout">
      <section className="panel">
        <h2>Your numbers</h2>

        <div className="fields">
          {config.fields.map(f => (
            <label key={f.name}>
              {f.label}
              <input
                type="number"
                inputMode="decimal"
                value={values[f.name]}
                onChange={e =>
                  setValues(v => ({
                    ...v,
                    [f.name]: e.target.value
                  }))
                }
              />
            </label>
          ))}
        </div>
      </section>

      <section className="panel results" aria-live="polite">
        <h2>Your estimated results</h2>

        {error ? (
          <p role="alert">{error}</p>
        ) : (
          rows.map(([label, value]) => (
            <div className="result-row" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))
        )}

        <p className="disclaimer">
          Estimates only. Excludes taxes, slippage and other costs
          unless explicitly entered. Staking APY and token prices
          may change. No investment advice.
        </p>
      </section>
    </div>
  );
}
