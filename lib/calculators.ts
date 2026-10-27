
export const tools = [
  {
    slug: 'crypto-profit-calculator',
    name: 'Crypto Profit & Loss',
    description: 'Calculate net gains, return percentage, and token quantities.'
  },
  {
    slug: 'crypto-dca-calculator',
    name: 'Crypto DCA Planner',
    description: 'Model recurring contributions using a hypothetical annual return.'
  },
  {
    slug: 'crypto-market-cap-calculator',
    name: 'Crypto Market Cap',
    description: 'Estimate market capitalization and implied token price.'
  },
  
  {
  slug: 'crypto-staking-rewards-calculator',
  name: 'Crypto Staking Rewards',
  description: 'Estimate staking rewards, compounded token balances, and their value in dollars.'
},

{
  slug: 'crypto-average-buy-price-calculator',
  name: 'Crypto Average Buy Price',
  description: 'Calculate your weighted-average cryptocurrency purchase price across multiple transactions.'
},

{
  slug: 'crypto-break-even-calculator',
  name: 'Crypto Break-Even Price',
  description: 'Calculate the selling price needed to recover your cryptocurrency investment and trading fees.'
},
{
  slug: 'crypto-investment-roi-calculator',
  name: 'Crypto Investment ROI',
  description: 'Calculate cryptocurrency investment returns, net profit or loss, and ROI percentage.'
}




  
] as const;

export type ToolSlug = typeof tools[number]['slug'];

export function profit(
  investment: number,
  buy: number,
  sell: number,
  fees: number
) {
  if (investment < 0 || buy <= 0 || sell < 0 || fees < 0) return null;

  const tokens = investment / buy;
  const proceeds = tokens * sell;
  const gain = proceeds - investment - fees;

  return {
    tokens,
    proceeds,
    gain,
    roi: investment > 0 ? gain / investment * 100 : 0
  };
}

export function dca(
  amount: number,
  perYear: number,
  years: number,
  annualReturn: number
) {
  if (
    amount < 0 ||
    years <= 0 ||
    years > 50 ||
    annualReturn <= -100 ||
    annualReturn > 1000
  ) return null;

  const n = Math.round(perYear * years);
  const periodic = Math.pow(1 + annualReturn / 100, 1 / perYear) - 1;
  const principal = amount * n;

  const future = Math.abs(periodic) < 1e-12
    ? principal
    : amount * (Math.pow(1 + periodic, n) - 1) / periodic;

  return {
    principal,
    future,
    gain: future - principal
  };
}

export function marketCap(
  supply: number,
  price: number,
  targetCap: number
) {
  if (supply <= 0 || price < 0 || targetCap < 0) return null;

  return {
    currentCap: supply * price,
    impliedPrice: targetCap / supply
  };
}

export function stakingRewards(
  tokens: number,
  apy: number,
  years: number,
  tokenPrice: number
) {
  if (
    ![tokens, apy, years, tokenPrice].every(Number.isFinite) ||
    tokens < 0 ||
    apy < 0 ||
    apy > 1000 ||
    years < 0 ||
    years > 50 ||
    tokenPrice < 0
  ) return null;

  // APY already includes the effect of compounding.
  const finalTokens = tokens * Math.pow(1 + apy / 100, years);
  const rewardTokens = finalTokens - tokens;

  return {
    initialTokens: tokens,
    rewardTokens,
    finalTokens,
    initialValue: tokens * tokenPrice,
    rewardValue: rewardTokens * tokenPrice,
    finalValue: finalTokens * tokenPrice
  };
}

export function averageBuyPrice(
  purchases: { tokens: number; price: number }[]
) {
  if (
    purchases.length === 0 ||
    purchases.some(
      p =>
        !Number.isFinite(p.tokens) ||
        !Number.isFinite(p.price) ||
        p.tokens <= 0 ||
        p.price < 0
    )
  ) {
    return null;
  }

  const totalTokens = purchases.reduce(
    (sum, p) => sum + p.tokens,
    0
  );

  const totalInvested = purchases.reduce(
    (sum, p) => sum + p.tokens * p.price,
    0
  );

  if (
    !Number.isFinite(totalTokens) ||
    !Number.isFinite(totalInvested) ||
    totalTokens <= 0
  ) {
    return null;
  }

  return {
    totalTokens,
    totalInvested,
    averagePrice: totalInvested / totalTokens,
    purchaseCount: purchases.length
  };
}

export function breakEvenPrice(
  tokens: number,
  averageBuyPrice: number,
  purchaseFees: number,
  sellingFees: number
) {
  if (
    ![tokens, averageBuyPrice, purchaseFees, sellingFees].every(Number.isFinite) ||
    tokens <= 0 ||
    averageBuyPrice < 0 ||
    purchaseFees < 0 ||
    sellingFees < 0
  ) {
    return null;
  }

  const purchaseCost = tokens * averageBuyPrice;
  const totalCost = purchaseCost + purchaseFees + sellingFees;

  if (!Number.isFinite(totalCost)) {
    return null;
  }

  const breakEven = totalCost / tokens;

  return {
    tokens,
    purchaseCost,
    totalFees: purchaseFees + sellingFees,
    totalCost,
    breakEven,
    requiredIncrease:
      averageBuyPrice > 0
        ? ((breakEven - averageBuyPrice) / averageBuyPrice) * 100
        : null
  };
}

export function investmentROI(
  initialInvestment: number,
  currentValue: number,
  totalFees: number
) {
  if (
    ![initialInvestment, currentValue, totalFees].every(Number.isFinite) ||
    initialInvestment <= 0 ||
    currentValue < 0 ||
    totalFees < 0
  ) {
    return null;
  }

  const netProfit = currentValue - initialInvestment - totalFees;
  const roiPercentage = (netProfit / initialInvestment) * 100;
  const netValue = currentValue - totalFees;

  if (
    ![netProfit, roiPercentage, netValue].every(Number.isFinite)
  ) {
    return null;
  }

  return {
    initialInvestment,
    currentValue,
    totalFees,
    netValue,
    netProfit,
    roiPercentage
  };
}



