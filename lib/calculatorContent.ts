
export const calculatorContent: Record<string, {
  explanation: string;
  formula: string;
  example: string;
  note: string;
}> = {
  'crypto-profit-calculator': {
    explanation: 'This calculator estimates how many cryptocurrency tokens your investment purchases, the proceeds from selling them, and your net profit or loss after entered fees.',
    formula: 'Tokens = Investment ÷ Buy Price; Net Profit = (Tokens × Sell Price) − Investment − Fees; ROI = Net Profit ÷ Investment × 100.',
    example: 'Investing $1,000 at $2 per token buys 500 tokens. Selling at $3 produces $1,500. With $20 in fees, net profit is $480 and ROI is 48%.',
    note: 'The entered fees are treated as one total dollar amount. Taxes, slippage, and other costs are not included unless reflected in your inputs.'
  },
  'crypto-dca-calculator': {
    explanation: 'This planner estimates the future value of equal recurring contributions using a hypothetical constant annual return, with contributions made at the end of each period.',
    formula: 'Periodic Return = (1 + Annual Return ÷ 100)^(1 ÷ Periods per Year) − 1; Future Value = Contribution × ((1 + Periodic Return)^Number of Contributions − 1) ÷ Periodic Return.',
    example: 'Contributing $100 each month for one year means $1,200 invested. At an assumed 0% annual return, the estimated ending value is $1,200.',
    note: 'This is a hypothetical investment-growth model, not a simulation of historical cryptocurrency purchases. Actual crypto prices fluctuate and returns are not guaranteed.'
  },
  'crypto-market-cap-calculator': {
    explanation: 'Calculate a cryptocurrency’s market capitalization from its circulating supply and price, then estimate the price implied by a target market capitalization.',
    formula: 'Market Cap = Circulating Supply × Token Price; Implied Price = Target Market Cap ÷ Circulating Supply.',
    example: 'A cryptocurrency with 100 million circulating tokens priced at $2 has a $200 million market cap. At a $500 million target market cap, its implied price is $5.',
    note: 'The implied price assumes circulating supply stays unchanged. Market capitalization is not the same as the amount of money invested in a cryptocurrency.'
  },
  'crypto-staking-rewards-calculator': {
    explanation: 'Estimate staking rewards in tokens and dollars using an annual percentage yield (APY), a staking period, and an assumed token price.',
    formula: 'Final Tokens = Starting Tokens × (1 + APY ÷ 100)^Years; Reward Tokens = Final Tokens − Starting Tokens.',
    example: 'Staking 1,000 tokens at 5% APY for one year produces an estimated 1,050 tokens, including 50 reward tokens. At $2 per token, the rewards are valued at $100.',
    note: 'APY already accounts for compounding. Actual yields may vary, and dollar estimates assume a constant token price. Taxes, validator fees, and lockup restrictions are not modeled.'
  },
  'crypto-average-buy-price-calculator': {
    explanation: 'Find the weighted-average purchase price of your cryptocurrency across multiple transactions, accounting for how many tokens were purchased at each price.',
    formula: 'Average Buy Price = Sum of (Tokens Purchased × Purchase Price) ÷ Total Tokens Purchased.',
    example: 'Buying 100 tokens at $2 and another 200 at $3 costs $800 for 300 tokens. Your average buy price is approximately $2.67 per token.',
    note: 'This calculation uses purchase quantities and prices only. Transaction fees are not included in the average.'
  },
  'crypto-break-even-calculator': {
    explanation: 'Determine the token selling price needed to recover the original purchase cost and the dollar amounts entered for buying and selling fees.',
    formula: 'Break-Even Price = (Tokens × Average Buy Price + Purchase Fees + Selling Fees) ÷ Tokens.',
    example: 'If you own 100 tokens purchased at $2 each and expect $10 in combined fees, your break-even selling price is $2.10 per token.',
    note: 'Selling fees are entered as a fixed dollar amount. Percentage-based exchange fees that depend on the selling price require a different calculation.'
  },
  'crypto-investment-roi-calculator': {
    explanation: 'Measure your cryptocurrency investment’s net profit or loss and percentage return based on its initial investment, current value, and entered fees.',
    formula: 'Net Profit = Current Value − Initial Investment − Total Fees; ROI = Net Profit ÷ Initial Investment × 100.',
    example: 'An initial investment of $1,000 now worth $1,400, with $25 in fees, produces $375 net profit and a 37.5% ROI.',
    note: 'The calculation does not account for taxes, inflation, or additional costs beyond the entered fees.'
  },
  'crypto-price-target-calculator': {
    explanation: 'Estimate the value of your cryptocurrency holdings at a target token price, along with potential investment profit and price appreciation.',
    formula: 'Target Value = Tokens × Target Price; Potential Profit = Target Value − (Tokens × Average Buy Price); Investment ROI = Potential Profit ÷ Investment Cost × 100.',
    example: 'Holding 500 tokens bought at $2 each gives a $1,000 cost basis. At a $4 target price, the holdings would be worth $2,000, representing $1,000 potential profit and 100% investment ROI.',
    note: 'Price targets are hypothetical scenarios, not forecasts. The calculator does not subtract trading fees or taxes.'
  },
  'crypto-percentage-change-calculator': {
    explanation: 'Calculate how much a cryptocurrency price has increased or decreased in dollar terms and as a percentage of its starting price.',
    formula: 'Dollar Change = Ending Price − Starting Price; Percentage Change = Dollar Change ÷ Starting Price × 100.',
    example: 'If a cryptocurrency rises from $2 to $2.50, the dollar change is $0.50 and the percentage increase is 25%.',
    note: 'The starting price must be greater than zero. This measures price movement, not investment profit after fees.'
  },
  'crypto-portfolio-allocation-calculator': {
    explanation: 'Calculate your cryptocurrency portfolio’s total value and the percentage represented by each holding.',
    formula: 'Total Portfolio Value = Sum of Holding Values; Allocation Percentage = Holding Value ÷ Total Portfolio Value × 100.',
    example: 'A portfolio containing $6,000 of Bitcoin and $4,000 of Ethereum totals $10,000, with 60% allocated to Bitcoin and 40% to Ethereum.',
    note: 'Enter each holding’s value in the same currency. Allocation percentages reflect the values entered and are not updated automatically with market prices.'
  },
  'crypto-position-size-calculator': {
    explanation: 'Estimate how much money to allocate to a cryptocurrency and how many tokens that allocation could purchase.',
    formula: 'Investment Amount = Portfolio Value × Allocation Percentage ÷ 100; Tokens to Purchase = Investment Amount ÷ Token Price.',
    example: 'For a $10,000 portfolio and a desired 5% allocation, the investment amount is $500. At $2 per token, that purchases 250 tokens.',
    note: 'This is an allocation calculator, not a stop-loss-based trading risk calculator. Fees and price slippage are excluded.'
  },
  'crypto-market-cap-to-price-calculator': {
    explanation: 'Estimate a cryptocurrency’s token price at a target market capitalization and compare it with its current price.',
    formula: 'Implied Token Price = Target Market Cap ÷ Circulating Supply; Percentage Change = (Implied Price − Current Price) ÷ Current Price × 100.',
    example: 'With 100 million circulating tokens and a target market cap of $500 million, the implied price is $5. Compared with a current price of $2, that represents a 150% increase.',
    note: 'The calculation assumes circulating supply remains constant. A target market cap does not guarantee that the implied token price will be reached.'
  },
  'crypto-trading-fee-calculator': {
    explanation: 'Estimate exchange fees on cryptocurrency purchases and sales, then calculate net profit or loss and return after those fees.',
    formula: 'Buy Fee = Purchase Amount × Buy Fee Rate; Sell Fee = Sale Amount × Sell Fee Rate; Net Profit = Sale Amount − Sell Fee − Purchase Amount − Buy Fee.',
    example: 'Buying $1,000 of cryptocurrency and selling it for $1,200, with a 1% fee on each transaction, results in $10 buying fees, $12 selling fees, and $178 net profit.',
    note: 'ROI is calculated against the purchase amount including the buying fee. Network fees, spreads, taxes, and slippage are not separately included.'
  },
  'crypto-mining-profitability-calculator': {
    explanation: 'Estimate cryptocurrency mining revenue, electricity costs, operating profit, and equipment payback time based on fixed daily revenue and continuous electricity usage.',
    formula: 'Daily Electricity Cost = (Power Watts ÷ 1,000) × 24 × Electricity Rate; Daily Profit = Daily Revenue − Daily Electricity Cost; Payback Days = Equipment Cost ÷ Daily Profit.',
    example: 'A miner earning $10 daily and using 1,000 watts at $0.10 per kWh spends $2.40 daily on electricity and earns an estimated $7.60 daily profit before other costs.',
    note: 'The model assumes 24-hour operation and constant revenue. It excludes mining difficulty changes, pool fees, maintenance, cooling, downtime, and taxes. Payback time is shown only for positive daily profit.'
  },
  'crypto-token-burn-calculator': {
    explanation: 'Calculate the remaining circulating token supply after a burn and estimate a theoretical new token price if market capitalization remains unchanged.',
    formula: 'Remaining Supply = Circulating Supply − Tokens Burned; Theoretical Price = Current Market Cap ÷ Remaining Supply.',
    example: 'A token with 100 million circulating units priced at $1 has a $100 million market cap. Burning 20 million tokens leaves 80 million, implying a theoretical $1.25 price at the same market cap.',
    note: 'This is a mathematical scenario, not a prediction. Token burns do not automatically cause proportional price increases because demand, liquidity, and market capitalization can change.'
  }
};
