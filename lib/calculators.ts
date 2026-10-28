
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
},
  
{
  slug: 'crypto-price-target-calculator',
  name: 'Crypto Price Target',
  description: 'Calculate the potential future value, profit, and return of your cryptocurrency holdings at a target price.'
},

{
  slug: 'crypto-percentage-change-calculator',
  name: 'Crypto Percentage Change',
  description: 'Calculate the dollar and percentage change between two cryptocurrency prices.'
},

{
  slug: 'crypto-portfolio-allocation-calculator',
  name: 'Crypto Portfolio Allocation',
  description: 'Add multiple cryptocurrency holdings and calculate your total portfolio value and each coin’s percentage allocation.'
},
  
{
  slug: 'crypto-position-size-calculator',
  name: 'Crypto Position Size',
  description: 'Calculate how much to invest and how many cryptocurrency tokens to purchase based on your portfolio value and desired allocation.'
},

{
  slug: 'crypto-market-cap-to-price-calculator',
  name: 'Crypto Market Cap to Price',
  description: 'Estimate a cryptocurrency token price from its target market capitalization and circulating supply, and compare it with the current price.'
},

{
  slug: 'crypto-trading-fee-calculator',
  name: 'Crypto Trading Fee Calculator',
  description: 'Calculate cryptocurrency buying and selling fees, total trading costs, net profit or loss, and return on investment after exchange fees.'
},

{
  slug: 'crypto-mining-profitability-calculator',
  name: 'Crypto Mining Profitability Calculator',
  description: 'Estimate cryptocurrency mining revenue, electricity expenses, daily and monthly profits, and equipment payback time.'
},


  
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

export function cryptoPriceTarget(
  tokens: number,
  currentPrice: number,
  targetPrice: number,
  averageBuyPrice: number
) {
  if (
    ![tokens, currentPrice, targetPrice, averageBuyPrice].every(Number.isFinite) ||
    tokens <= 0 ||
    currentPrice < 0 ||
    targetPrice < 0 ||
    averageBuyPrice < 0
  ) {
    return null;
  }

  const currentValue = tokens * currentPrice;
  const targetValue = tokens * targetPrice;
  const investmentCost = tokens * averageBuyPrice;
  const potentialProfit = targetValue - investmentCost;

  const priceChange =
    currentPrice > 0
      ? ((targetPrice - currentPrice) / currentPrice) * 100
      : null;

  const investmentROI =
    investmentCost > 0
      ? (potentialProfit / investmentCost) * 100
      : null;

  if (
    ![currentValue, targetValue, investmentCost, potentialProfit].every(Number.isFinite) ||
    (priceChange !== null && !Number.isFinite(priceChange)) ||
    (investmentROI !== null && !Number.isFinite(investmentROI))
  ) {
    return null;
  }

  return {
    tokens,
    currentValue,
    targetValue,
    investmentCost,
    potentialProfit,
    priceChange,
    investmentROI
  };
}

export function cryptoPercentageChange(
  startingPrice: number,
  endingPrice: number
) {
  if (
    ![startingPrice, endingPrice].every(Number.isFinite) ||
    startingPrice <= 0 ||
    endingPrice < 0
  ) {
    return null;
  }

  const dollarChange = endingPrice - startingPrice;
  const percentageChange =
    (dollarChange / startingPrice) * 100;

  if (
    !Number.isFinite(dollarChange) ||
    !Number.isFinite(percentageChange)
  ) {
    return null;
  }

  return {
    startingPrice,
    endingPrice,
    dollarChange,
    percentageChange
  };
}

export function cryptoPortfolioAllocation(
  holdings: { name: string; value: number }[]
) {
  if (
    holdings.length === 0 ||
    holdings.some(
      h =>
        h.name.trim() === '' ||
        !Number.isFinite(h.value) ||
        h.value < 0
    )
  ) {
    return null;
  }

  const totalValue = holdings.reduce(
    (sum, h) => sum + h.value,
    0
  );

  if (!Number.isFinite(totalValue) || totalValue <= 0) {
    return null;
  }

  const allocations = holdings.map(h => ({
    name: h.name.trim(),
    value: h.value,
    percentage: (h.value / totalValue) * 100
  }));

  return {
    totalValue,
    allocations,
    cryptocurrencyCount: holdings.length
  };
}


export function cryptoPositionSize(
  portfolioValue: number,
  allocationPercentage: number,
  tokenPrice: number
) {
  if (
    ![portfolioValue, allocationPercentage, tokenPrice].every(Number.isFinite) ||
    portfolioValue <= 0 ||
    allocationPercentage < 0 ||
    allocationPercentage > 100 ||
    tokenPrice <= 0
  ) {
    return null;
  }

  const investmentAmount =
    portfolioValue * (allocationPercentage / 100);

  const tokensToPurchase = investmentAmount / tokenPrice;

  if (
    !Number.isFinite(investmentAmount) ||
    !Number.isFinite(tokensToPurchase)
  ) {
    return null;
  }

  return {
    portfolioValue,
    allocationPercentage,
    tokenPrice,
    investmentAmount,
    tokensToPurchase
  };
}


export function cryptoMarketCapToPrice(
  circulatingSupply: number,
  targetMarketCap: number,
  currentPrice: number
) {
  if (
    ![circulatingSupply, targetMarketCap, currentPrice].every(Number.isFinite) ||
    circulatingSupply <= 0 ||
    targetMarketCap < 0 ||
    currentPrice <= 0
  ) {
    return null;
  }

  const impliedPrice = targetMarketCap / circulatingSupply;
  const priceChange = impliedPrice - currentPrice;
  const percentageChange = (priceChange / currentPrice) * 100;
  const currentMarketCap = circulatingSupply * currentPrice;

  if (
    ![
      impliedPrice,
      priceChange,
      percentageChange,
      currentMarketCap
    ].every(Number.isFinite)
  ) {
    return null;
  }

  return {
    circulatingSupply,
    targetMarketCap,
    currentPrice,
    currentMarketCap,
    impliedPrice,
    priceChange,
    percentageChange
  };
}

export function cryptoTradingFee(
  purchaseAmount: number,
  saleAmount: number,
  buyFeePercentage: number,
  sellFeePercentage: number
) {
  if (
    ![
      purchaseAmount,
      saleAmount,
      buyFeePercentage,
      sellFeePercentage
    ].every(Number.isFinite) ||
    purchaseAmount <= 0 ||
    saleAmount < 0 ||
    buyFeePercentage < 0 ||
    buyFeePercentage > 100 ||
    sellFeePercentage < 0 ||
    sellFeePercentage > 100
  ) {
    return null;
  }

  const purchaseFee = purchaseAmount * (buyFeePercentage / 100);
  const sellingFee = saleAmount * (sellFeePercentage / 100);

  const totalPurchaseCost = purchaseAmount + purchaseFee;
  const netSaleProceeds = saleAmount - sellingFee;
  const totalFees = purchaseFee + sellingFee;

  const netProfit = netSaleProceeds - totalPurchaseCost;
  const roi = (netProfit / totalPurchaseCost) * 100;

  if (
    ![
      purchaseFee,
      sellingFee,
      totalPurchaseCost,
      netSaleProceeds,
      totalFees,
      netProfit,
      roi
    ].every(Number.isFinite)
  ) {
    return null;
  }

  return {
    purchaseAmount,
    saleAmount,
    buyFeePercentage,
    sellFeePercentage,
    purchaseFee,
    sellingFee,
    totalPurchaseCost,
    netSaleProceeds,
    totalFees,
    netProfit,
    roi
  };
}


export function cryptoMiningProfitability(
  dailyRevenue: number,
  powerWatts: number,
  electricityRate: number,
  equipmentCost: number
) {
  if (
    ![
      dailyRevenue,
      powerWatts,
      electricityRate,
      equipmentCost
    ].every(Number.isFinite) ||
    dailyRevenue < 0 ||
    powerWatts < 0 ||
    electricityRate < 0 ||
    equipmentCost < 0
  ) {
    return null;
  }

  const dailyElectricityCost =
    (powerWatts / 1000) * 24 * electricityRate;

  const dailyProfit = dailyRevenue - dailyElectricityCost;

  const monthlyRevenue = dailyRevenue * 30;
  const yearlyRevenue = dailyRevenue * 365;

  const monthlyElectricityCost = dailyElectricityCost * 30;
  const yearlyElectricityCost = dailyElectricityCost * 365;

  const monthlyProfit = dailyProfit * 30;
  const yearlyProfit = dailyProfit * 365;

  const paybackDays =
    dailyProfit > 0 ? equipmentCost / dailyProfit : null;

  const results = [
    dailyElectricityCost,
    dailyProfit,
    monthlyRevenue,
    yearlyRevenue,
    monthlyElectricityCost,
    yearlyElectricityCost,
    monthlyProfit,
    yearlyProfit
  ];

  if (!results.every(Number.isFinite) ||
      (paybackDays !== null && !Number.isFinite(paybackDays))) {
    return null;
  }

  return {
    dailyRevenue,
    powerWatts,
    electricityRate,
    equipmentCost,
    dailyElectricityCost,
    monthlyRevenue,
    yearlyRevenue,
    monthlyElectricityCost,
    yearlyElectricityCost,
    dailyProfit,
    monthlyProfit,
    yearlyProfit,
    paybackDays
  };
}

