
export type CalculatorFAQ = {
  question: string;
  answer: string;
};

export const calculatorFAQs: Record<string, CalculatorFAQ[]> = {
  'crypto-profit-calculator': [
    {
      question: 'How do I calculate cryptocurrency profit?',
      answer: 'Subtract your original investment and entered trading fees from the amount you would receive when selling your cryptocurrency. This calculator also estimates the number of tokens purchased and your percentage return.'
    },
    {
      question: 'What is ROI in cryptocurrency?',
      answer: 'Return on investment (ROI) measures profit or loss relative to the original investment. For example, a $200 net profit on a $1,000 investment represents a 20% ROI.'
    },
    {
      question: 'Does the calculator include trading fees?',
      answer: 'Yes. You can enter a total dollar amount for fees, which the calculator subtracts when determining net profit or loss.'
    },
    {
      question: 'Does cryptocurrency profit include taxes?',
      answer: 'No. The calculator does not calculate capital gains taxes. Tax treatment depends on your circumstances and applicable laws.'
    }
  ],

  'crypto-dca-calculator': [
    {
      question: 'What is dollar-cost averaging in cryptocurrency?',
      answer: 'Dollar-cost averaging (DCA) is an investment strategy that involves purchasing cryptocurrency at regular intervals instead of investing the entire amount at once.'
    },
    {
      question: 'Does dollar-cost averaging guarantee a profit?',
      answer: 'No. DCA spreads purchases over time but does not eliminate market risk or guarantee positive investment returns.'
    },
    {
      question: 'How does this DCA calculator estimate growth?',
      answer: 'It models equal contributions made at the end of each period and applies a hypothetical constant annual return. It does not use historical cryptocurrency prices.'
    },
    {
      question: 'Is weekly or monthly DCA better?',
      answer: 'Neither schedule is universally better. The outcome depends on market movements, transaction costs, and your investment circumstances. Consistency and affordability are important considerations.'
    }
  ],

  'crypto-market-cap-calculator': [
    {
      question: 'What is cryptocurrency market capitalization?',
      answer: 'Market capitalization is the circulating supply of a cryptocurrency multiplied by its current price per token.'
    },
    {
      question: 'How do I calculate a cryptocurrency market cap?',
      answer: 'Multiply the number of circulating tokens by the price of one token. For example, 100 million tokens priced at $2 each have a market capitalization of $200 million.'
    },
    {
      question: 'Does a higher market cap mean a cryptocurrency is safer?',
      answer: 'Not necessarily. Market capitalization describes market value but does not establish security, liquidity, financial strength, or future performance.'
    },
    {
      question: 'Does market cap equal the amount of money invested?',
      answer: 'No. Market capitalization is calculated using circulating supply and the latest market price. It is not a measurement of the total cash invested in a cryptocurrency.'
    }
  ],

  'crypto-staking-rewards-calculator': [
    {
      question: 'What is the difference between APY and APR?',
      answer: 'APR generally expresses an annual rate without compounding, while APY includes the effect of compounding. This calculator uses APY to estimate growth.'
    },
    {
      question: 'Are cryptocurrency staking rewards guaranteed?',
      answer: 'No. Staking yields can change, and rewards may be affected by validator performance, network rules, fees, or other risks.'
    },
    {
      question: 'Does a higher token price increase staking rewards?',
      answer: 'A higher token price increases the dollar value of rewards if the number of reward tokens stays the same. It does not automatically increase the quantity of tokens earned.'
    },
    {
      question: 'Can I lose money while staking cryptocurrency?',
      answer: 'Yes. The market value of your tokens can decline, and some staking arrangements involve slashing, lockups, or platform-related risks.'
    }
  ],

  'crypto-average-buy-price-calculator': [
    {
      question: 'What is the average buy price of cryptocurrency?',
      answer: 'It is the total amount spent purchasing tokens divided by the total number of tokens purchased. This gives a quantity-weighted average price.'
    },
    {
      question: 'Why is my average buy price important?',
      answer: 'Your average purchase price helps you understand your investment cost per token and compare it with the current market price.'
    },
    {
      question: 'Does buying more crypto at a lower price reduce my average?',
      answer: 'Yes. Purchasing additional tokens below your existing average buy price lowers your new weighted-average purchase price.'
    },
    {
      question: 'Does this calculator include exchange fees?',
      answer: 'No. It calculates the weighted-average price from token quantities and purchase prices without adding transaction fees.'
    }
  ],

  'crypto-break-even-calculator': [
    {
      question: 'What is a cryptocurrency break-even price?',
      answer: 'It is the selling price per token required to recover your original purchase cost and the entered buying and selling fees, without making a profit or loss.'
    },
    {
      question: 'How do trading fees affect break-even price?',
      answer: 'Trading fees increase the amount you must recover, so a higher selling price is generally required to break even.'
    },
    {
      question: 'Can my break-even price be higher than my purchase price?',
      answer: 'Yes. When buying or selling fees are greater than zero, your break-even price will be higher than your average purchase price.'
    },
    {
      question: 'Does this calculator account for percentage-based selling fees?',
      answer: 'It accepts selling fees as a fixed dollar amount. If your exchange charges a percentage of the sale value, the fee may change as the selling price changes.'
    }
  ],

  'crypto-investment-roi-calculator': [
    {
      question: 'What does ROI mean in cryptocurrency investing?',
      answer: 'ROI stands for return on investment. It measures net investment profit or loss as a percentage of the initial amount invested.'
    },
    {
      question: 'How is cryptocurrency ROI calculated?',
      answer: 'Subtract the initial investment and entered fees from the current value. Divide the resulting net profit or loss by the initial investment and multiply by 100.'
    },
    {
      question: 'Can cryptocurrency ROI be negative?',
      answer: 'Yes. A negative ROI means the investment has lost value relative to its original cost after the entered fees.'
    },
    {
      question: 'Does ROI account for how long I held an investment?',
      answer: 'No. This calculator measures the total percentage return, not an annualized return adjusted for the holding period.'
    }
  ],

  'crypto-price-target-calculator': [
    {
      question: 'What is a cryptocurrency price target?',
      answer: 'A price target is a hypothetical future token price used to estimate what your holdings could be worth if that price were reached.'
    },
    {
      question: 'How do I calculate the value of crypto at a target price?',
      answer: 'Multiply the number of tokens you hold by the target price per token.'
    },
    {
      question: 'Does this calculator predict cryptocurrency prices?',
      answer: 'No. It calculates outcomes based on the target price you enter. It does not forecast whether or when that price will occur.'
    },
    {
      question: 'What is the difference between price change and investment ROI?',
      answer: 'Price change compares the target price with the current market price. Investment ROI compares the target value of your holdings with their original purchase cost.'
    }
  ],

  'crypto-percentage-change-calculator': [
    {
      question: 'How do I calculate a cryptocurrency price increase?',
      answer: 'Subtract the starting price from the ending price, divide by the starting price, and multiply by 100 to express the change as a percentage.'
    },
    {
      question: 'Can cryptocurrency percentage change be negative?',
      answer: 'Yes. A negative percentage indicates that the ending price is lower than the starting price.'
    },
    {
      question: 'Is a 50% loss reversed by a 50% gain?',
      answer: 'No. A 50% loss requires a subsequent 100% gain to return to the original price because the gain starts from a smaller value.'
    },
    {
      question: 'Does percentage price change equal investment profit?',
      answer: 'Not necessarily. Investment profit also depends on the quantity held, purchase costs, fees, and other transactions.'
    }
  ],

  'crypto-portfolio-allocation-calculator': [
    {
      question: 'What is cryptocurrency portfolio allocation?',
      answer: 'Portfolio allocation is the percentage of your total portfolio value represented by each cryptocurrency holding.'
    },
    {
      question: 'How do I calculate portfolio allocation?',
      answer: 'Divide the value of a holding by the total portfolio value and multiply by 100.'
    },
    {
      question: 'Why does cryptocurrency portfolio allocation matter?',
      answer: 'It helps you understand concentration and how much of your portfolio is exposed to each cryptocurrency.'
    },
    {
      question: 'Does the calculator update cryptocurrency prices automatically?',
      answer: 'No. It calculates allocations using the holding values you enter, so you need to update those values as market prices change.'
    }
  ],

  'crypto-position-size-calculator': [
    {
      question: 'What is cryptocurrency position sizing?',
      answer: 'Position sizing determines how much money to allocate to a cryptocurrency investment relative to your overall portfolio.'
    },
    {
      question: 'How does this position size calculator work?',
      answer: 'It multiplies your portfolio value by your desired allocation percentage and divides that investment amount by the token price to estimate how many tokens you can purchase.'
    },
    {
      question: 'Does position sizing eliminate investment risk?',
      answer: 'No. Position sizing helps manage exposure but cannot prevent market losses or guarantee a profitable investment.'
    },
    {
      question: 'Does this calculator use stop-loss risk?',
      answer: 'No. It calculates portfolio allocation rather than position size based on entry price, stop-loss distance, and maximum acceptable trading loss.'
    }
  ],

  'crypto-market-cap-to-price-calculator': [
    {
      question: 'How do I estimate crypto price from market capitalization?',
      answer: 'Divide the target market capitalization by the cryptocurrency’s circulating token supply.'
    },
    {
      question: 'Can a cryptocurrency reach a specific target market cap?',
      answer: 'Possibly, but the calculator does not predict whether it will happen. Market demand, liquidity, circulating supply, and other factors affect actual prices.'
    },
    {
      question: 'Does increasing token supply affect the implied price?',
      answer: 'Yes. If market capitalization remains unchanged, a larger circulating supply results in a lower implied price per token.'
    },
    {
      question: 'Is market capitalization the same as trading volume?',
      answer: 'No. Market capitalization estimates the value of circulating tokens at the current price, while trading volume measures how much is traded over a period.'
    }
  ],

  'crypto-trading-fee-calculator': [
    {
      question: 'What are cryptocurrency trading fees?',
      answer: 'Trading fees are charges that an exchange or trading platform applies when you buy or sell cryptocurrency.'
    },
    {
      question: 'How do trading fees affect crypto profit?',
      answer: 'Buying fees increase your total purchase cost, while selling fees reduce your sale proceeds. Both reduce net profit or increase net loss.'
    },
    {
      question: 'Does this calculator include fees on both purchases and sales?',
      answer: 'Yes. You can enter separate percentage rates for buying and selling, and the calculator estimates both fees.'
    },
    {
      question: 'Are trading fees the same as blockchain network fees?',
      answer: 'No. Exchange trading fees and blockchain network transaction fees are different charges. Network fees are not separately calculated by this tool.'
    }
  ],

  'crypto-mining-profitability-calculator': [
    {
      question: 'How is cryptocurrency mining profitability calculated?',
      answer: 'Subtract estimated electricity expenses from mining revenue. This calculator also estimates monthly and yearly operating profit and equipment payback time.'
    },
    {
      question: 'How does electricity cost affect mining profit?',
      answer: 'Higher electricity rates or greater power consumption increase operating expenses and reduce estimated mining profit.'
    },
    {
      question: 'Does this calculator account for mining difficulty changes?',
      answer: 'No. It assumes the daily revenue entered remains constant. Actual mining revenue can change with difficulty, network rewards, cryptocurrency prices, and other conditions.'
    },
    {
      question: 'What does mining equipment payback time mean?',
      answer: 'It estimates how many days of positive operating profit would be needed to recover the entered equipment cost, assuming the modeled revenue and expenses remain constant.'
    }
  ],

  'crypto-token-burn-calculator': [
    {
      question: 'What is a cryptocurrency token burn?',
      answer: 'A token burn permanently removes tokens from usable circulation, typically by sending them to an inaccessible address or through a protocol mechanism.'
    },
    {
      question: 'Does burning tokens automatically increase their price?',
      answer: 'No. Actual market prices depend on supply, demand, liquidity, and other conditions. A token burn does not guarantee a price increase.'
    },
    {
      question: 'How does this token burn calculator estimate price?',
      answer: 'It divides the original market capitalization by the remaining circulating supply after the burn, assuming market capitalization stays constant.'
    },
    {
      question: 'What happens if half the circulating supply is burned?',
      answer: 'Under the calculator’s constant-market-cap assumption, burning half the circulating supply would mathematically double the implied price per remaining token. Actual market prices may behave differently.'
    }
  ]
};
