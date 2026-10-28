'use client';

import { useState } from 'react';
import {
  averageBuyPrice,
  breakEvenPrice,
    cryptoPortfolioAllocation,
   cryptoPositionSize,
  cryptoMarketCapToPrice,
 cryptoPriceTarget,
   cryptoPercentageChange,
 investmentROI,
  dca,
  marketCap,
  profit,
  stakingRewards,
  type ToolSlug
} from '../lib/calculators';

type Field = {
  name: string;
  label: string;
  initial: number;
};

const configs: Record<ToolSlug, { fields: Field[] }> = {
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
      { name: 'frequency', label: 'Contributions per year (12 monthly, 52 weekly)', initial: 52 },
      { name: 'years', label: 'Number of years', initial: 5 },
      { name: 'rate', label: 'Hypothetical annual return (%)', initial: 10 }
    ]
  },
  'crypto-market-cap-calculator': {
    fields: [
      { name: 'supply', label: 'Circulating supply (tokens)', initial: 1000000000 },
      { name: 'price', label: 'Current token price ($)', initial: 1 },
      { name: 'target', label: 'Target market capitalization ($)', initial: 5000000000 }
    ]
  },
  'crypto-staking-rewards-calculator': {
    fields: [
      { name: 'tokens', label: 'Tokens staked', initial: 10000 },
      { name: 'apy', label: 'Annual percentage yield (APY %)', initial: 5 },
      { name: 'years', label: 'Staking duration (years)', initial: 3 },
      { name: 'tokenPrice', label: 'Token price ($)', initial: 2 }
    ]
  },
  'crypto-average-buy-price-calculator': {
    fields: []
  },
  
'crypto-investment-roi-calculator': {
  fields: [
    { name: 'initialInvestment', label: 'Initial investment ($)', initial: 10000 },
    { name: 'currentValue', label: 'Current investment value ($)', initial: 15000 },
    { name: 'totalFees', label: 'Total fees not already deducted ($)', initial: 100 }
  ]
},
 
'crypto-price-target-calculator': {
  fields: [
    { name: 'tokens', label: 'Tokens owned', initial: 10000 },
    { name: 'currentPrice', label: 'Current token price ($)', initial: 2 },
    { name: 'targetPrice', label: 'Target token price ($)', initial: 5 },
    { name: 'averageBuyPrice', label: 'Average purchase price ($)', initial: 1.5 }
  ]
},

'crypto-percentage-change-calculator': {
  fields: [
    { name: 'startingPrice', label: 'Starting token price ($)', initial: 2 },
    { name: 'endingPrice', label: 'Ending token price ($)', initial: 3.5 }
  ]
},

'crypto-portfolio-allocation-calculator': {
  fields: []
},
 
'crypto-position-size-calculator': {
  fields: [
    { name: 'portfolioValue', label: 'Total portfolio value ($)', initial: 50000 },
    { name: 'allocationPercentage', label: 'Desired allocation (%)', initial: 10 },
    { name: 'tokenPrice', label: 'Token purchase price ($)', initial: 2.5 }
  ]
},

'crypto-market-cap-to-price-calculator': {
  fields: [
    { name: 'circulatingSupply', label: 'Circulating token supply', initial: 50000000000 },
    { name: 'targetMarketCap', label: 'Target market capitalization ($)', initial: 250000000000 },
    { name: 'currentPrice', label: 'Current token price ($)', initial: 2 }
  ]
},


  'crypto-break-even-calculator': {
    fields: [
      { name: 'tokens', label: 'Tokens owned', initial: 10000 },
      { name: 'averagePrice', label: 'Average purchase price ($)', initial: 2 },
      { name: 'purchaseFees', label: 'Purchase fees ($)', initial: 50 },
      { name: 'sellingFees', label: 'Estimated selling fees ($)', initial: 50 }
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

function AverageBuyPriceCalculator() {
  const [purchases, setPurchases] = useState([
    { id: 1, tokens: '1000', price: '2' },
    { id: 2, tokens: '2000', price: '1.5' },
    { id: 3, tokens: '1000', price: '1' }
  ]);

  const [nextId, setNextId] = useState(4);

  const valid = purchases.every(
    p =>
      p.tokens.trim() !== '' &&
      p.price.trim() !== '' &&
      Number.isFinite(Number(p.tokens)) &&
      Number.isFinite(Number(p.price))
  );

  const result = valid
    ? averageBuyPrice(
        purchases.map(p => ({
          tokens: Number(p.tokens),
          price: Number(p.price)
        }))
      )
    : null;

  function updatePurchase(
    id: number,
    field: 'tokens' | 'price',
    value: string
  ) {
    setPurchases(current =>
      current.map(p =>
        p.id === id ? { ...p, [field]: value } : p
      )
    );
  }

  function addPurchase() {
    setPurchases(current => [
      ...current,
      { id: nextId, tokens: '', price: '' }
    ]);
    setNextId(id => id + 1);
  }

  function removePurchase(id: number) {
    setPurchases(current =>
      current.length > 1
        ? current.filter(p => p.id !== id)
        : current
    );
  }

  return (
    <div className="calc-layout">
      <section className="panel">
        <h2>Your purchases</h2>
        <p>Enter each purchase separately.</p>

        <div className="fields">
          {purchases.map((p, index) => (
            <div key={p.id}>
              <h3>Purchase {index + 1}</h3>

              <label>
                Tokens purchased
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={p.tokens}
                  onChange={e =>
                    updatePurchase(p.id, 'tokens', e.target.value)
                  }
                />
              </label>

              <label>
                Price per token ($)
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={p.price}
                  onChange={e =>
                    updatePurchase(p.id, 'price', e.target.value)
                  }
                />
              </label>

              <button
                type="button"
                onClick={() => removePurchase(p.id)}
                disabled={purchases.length === 1}
              >
                Remove purchase
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={addPurchase}>
          + Add Purchase
        </button>
      </section>

      <section className="panel results" aria-live="polite">
        <h2>Your estimated results</h2>

        {result ? (
          <>
            <div className="result-row">
              <span>Total tokens</span>
              <strong>{number(result.totalTokens)}</strong>
            </div>
            <div className="result-row">
              <span>Total invested</span>
              <strong>{money(result.totalInvested)}</strong>
            </div>
            <div className="result-row">
              <span>Average buy price</span>
              <strong>{money(result.averagePrice)}</strong>
            </div>
            <div className="result-row">
              <span>Number of purchases</span>
              <strong>{result.purchaseCount}</strong>
            </div>
          </>
        ) : (
          <p role="alert">
            Enter valid purchase quantities greater than zero and
            nonnegative prices for every purchase.
          </p>
        )}

        <p className="disclaimer">
          Weighted-average purchase price excludes trading fees.
          Estimates only. No investment advice.
        </p>
      </section>
    </div>
  );
}

function PortfolioAllocationCalculator() {
  const [holdings, setHoldings] = useState([
    { id: 1, name: 'XRP', value: '25000' },
    { id: 2, name: 'Bitcoin', value: '15000' },
    { id: 3, name: 'HBAR', value: '10000' }
  ]);

  const [nextId, setNextId] = useState(4);

  const valid = holdings.every(
    h =>
      h.name.trim() !== '' &&
      h.value.trim() !== '' &&
      Number.isFinite(Number(h.value)) &&
    
      Number(h.value) >= 0
  );

  const result = valid
    ? cryptoPortfolioAllocation(
        holdings.map(h => ({
          name: h.name,
          value: Number(h.value)
        }))
      )
    : null;

  function updateHolding(
    id: number,
    field: 'name' | 'value',
    value: string
  ) {
    setHoldings(current =>
      current.map(h =>
        h.id === id ? { ...h, [field]: value } : h
      )
    );
  }

  function addHolding() {
    setHoldings(current => [
      ...current,
      { id: nextId, name: '', value: '' }
    ]);
    setNextId(id => id + 1);
  }

  function removeHolding(id: number) {
    setHoldings(current =>
      current.length > 1
        ? current.filter(h => h.id !== id)
        : current
    );
  }

  return (
    <div className="calc-layout">
      <section className="panel">
        <h2>Your cryptocurrency holdings</h2>
        <p>Enter each cryptocurrency and its current dollar value.</p>

        <div className="fields">
          {holdings.map((h, index) => (
            <div key={h.id}>
              <h3>Cryptocurrency {index + 1}</h3>

              <label>
                Cryptocurrency name
                <input
                  type="text"
                  value={h.name}
                  placeholder="e.g. XRP"
                  onChange={e =>
                    updateHolding(h.id, 'name', e.target.value)
                  }
                />
              </label>

              <label>
                Current holding value ($)
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={h.value}
                  onChange={e =>
                    updateHolding(h.id, 'value', e.target.value)
                  }
                />
              </label>

              <button
                type="button"
                onClick={() => removeHolding(h.id)}
                disabled={holdings.length === 1}
              >
                Remove Cryptocurrency
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={addHolding}>
          + Add Cryptocurrency
        </button>
      </section>

      <section className="panel results" aria-live="polite">
        <h2>Your portfolio allocation</h2>

        {result ? (
          <>
            <div className="result-row">
              <span>Total portfolio value</span>
              <strong>{money(result.totalValue)}</strong>
            </div>

            <div className="result-row">
              <span>Number of cryptocurrencies</span>
              <strong>{result.cryptocurrencyCount}</strong>
            </div>

            {result.allocations.map((h, index) => (
              <div className="result-row" key={index}>
                <span>{h.name}</span>
                <strong>
                  {money(h.value)} ({h.percentage.toFixed(2)}%)
                </strong>
              </div>
            ))}
          </>
        ) : (
          <p role="alert">
            Enter a name and nonnegative dollar value for each
            cryptocurrency. Total portfolio value must be greater
            than zero.
          </p>
        )}

        <p className="disclaimer">
          Portfolio allocations are based on the dollar values
          entered. Estimates only. No investment advice.
        </p>
      </section>
    </div>
  );
}


export default function Calculator({ slug }: { slug: ToolSlug }) {
  const config = configs[slug];

  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(
      config.fields.map(f => [f.name, String(f.initial)])
    )
  );

  const get = (name: string) => Number(values[name]);

  const valid = config.fields.every(
    f =>
      values[f.name].trim() !== '' &&
      Number.isFinite(get(f.name))
  );

  if (slug === 'crypto-average-buy-price-calculator') {
    return <AverageBuyPriceCalculator />;
  }

if (slug === 'crypto-portfolio-allocation-calculator') {
  return <PortfolioAllocationCalculator />;
}

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

    if (slug === 'crypto-break-even-calculator') {
      const r = breakEvenPrice(
        get('tokens'),
        get('averagePrice'),
        get('purchaseFees'),
        get('sellingFees')
      );

      if (r) {
        rows = [
          ['Tokens owned', number(r.tokens)],
          ['Original purchase cost', money(r.purchaseCost)],
          ['Total trading fees', money(r.totalFees)],
          ['Total amount to recover', money(r.totalCost)],
          ['Break-even selling price', money(r.breakEven)],
          ['Required price increase', r.requiredIncrease === null ? 'N/A (zero purchase price)' : `${r.requiredIncrease.toFixed(2)}%`]
        ];
      } else {
        error = 'Enter a token quantity greater than zero and nonnegative prices and fees.';
      }
    }
    
if (slug === 'crypto-investment-roi-calculator') {
  const r = investmentROI(
    get('initialInvestment'),
    get('currentValue'),
    get('totalFees')
  );

  if (r) {
    rows = [
      ['Initial investment', money(r.initialInvestment)],
      ['Current investment value', money(r.currentValue)],
      ['Total fees', money(r.totalFees)],
      ['Net value after fees', money(r.netValue)],
      ['Net profit / loss', money(r.netProfit)],
      ['Return on investment', `${r.roiPercentage.toFixed(2)}%`]
    ];
  } else {
    error =
      'Enter an initial investment greater than zero and nonnegative values and fees.';
  }
}

if (slug === 'crypto-price-target-calculator') {
  const r = cryptoPriceTarget(
    get('tokens'),
    get('currentPrice'),
    get('targetPrice'),
    get('averageBuyPrice')
  );
  

  if (r) {
    rows = [
      ['Tokens owned', number(r.tokens)],
      ['Current holdings value', money(r.currentValue)],
      ['Value at target price', money(r.targetValue)],
      ['Original investment', money(r.investmentCost)],
      ['Potential profit / loss', money(r.potentialProfit)],
      [
        'Price change to target',
        r.priceChange === null
          ? 'N/A'
          : `${r.priceChange.toFixed(2)}%`
      ],
      [
        'Investment ROI at target',
        r.investmentROI === null
          ? 'N/A'
          : `${r.investmentROI.toFixed(2)}%`
      ]
    ];
  } else {
    error =
      'Enter a token quantity greater than zero and nonnegative prices.';
  }
}
   
if (slug === 'crypto-percentage-change-calculator') {
  const r = cryptoPercentageChange(
    get('startingPrice'),
    get('endingPrice')
  );

  if (r) {
    rows = [
      ['Starting price', money(r.startingPrice)],
      ['Ending price', money(r.endingPrice)],
      ['Dollar change', money(r.dollarChange)],
      ['Percentage change', `${r.percentageChange.toFixed(2)}%`]
    ];
  } else {
    error =
      'Enter a starting price greater than zero and a nonnegative ending price.';
  }
}
    
if (slug === 'crypto-position-size-calculator') {
  const r = cryptoPositionSize(
    get('portfolioValue'),
    get('allocationPercentage'),
    get('tokenPrice')
  );
  
  if (r) {
    rows = [
      ['Total portfolio value', money(r.portfolioValue)],
      ['Desired allocation', `${r.allocationPercentage.toFixed(2)}%`],
      ['Amount to invest', money(r.investmentAmount)],
      ['Token purchase price', money(r.tokenPrice)],
      ['Tokens to purchase', number(r.tokensToPurchase)]
    ];
  } else {
    error =
      'Enter a portfolio value greater than zero, an allocation between 0% and 100%, and a token price greater than zero.';
  }
}

if (slug === 'crypto-market-cap-to-price-calculator') {
  const r = cryptoMarketCapToPrice(
    get('circulatingSupply'),
    get('targetMarketCap'),
    get('currentPrice')
  );

  if (r) {
    rows = [
      ['Circulating token supply', number(r.circulatingSupply)],
      ['Target market capitalization', money(r.targetMarketCap)],
      ['Current token price', money(r.currentPrice)],
      ['Current market capitalization', money(r.currentMarketCap)],
      ['Implied token price', money(r.impliedPrice)],
      ['Price change', money(r.priceChange)],
      ['Percentage change', `${r.percentageChange.toFixed(2)}%`]
    ];
  } else {
    error =
      'Enter a circulating supply greater than zero, a nonnegative target market cap, and a current token price greater than zero.';
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
