export const tools = [
  {slug:'crypto-profit-calculator',name:'Crypto Profit & Loss',description:'Calculate net gains, return percentage, and token quantities.'},
  {slug:'crypto-dca-calculator',name:'Crypto DCA Planner',description:'Model recurring contributions using a hypothetical annual return.'},
  {slug:'crypto-market-cap-calculator',name:'Crypto Market Cap',description:'Estimate market capitalization and implied token price.'},
] as const;
export type ToolSlug = typeof tools[number]['slug'];
export function profit(investment:number,buy:number,sell:number,fees:number){if(investment<0||buy<=0||sell<0||fees<0)return null;const tokens=investment/buy;const proceeds=tokens*sell;const gain=proceeds-investment-fees;return {tokens,proceeds,gain,roi:investment>0?gain/investment*100:0};}
export function dca(amount:number,perYear:number,years:number,annualReturn:number){if(amount<0||years<=0||years>50||annualReturn<=-100||annualReturn>1000)return null;const n=Math.round(perYear*years);const periodic=Math.pow(1+annualReturn/100,1/perYear)-1;const principal=amount*n;const future=Math.abs(periodic)<1e-12?principal:amount*(Math.pow(1+periodic,n)-1)/periodic;return {principal,future,gain:future-principal};}
export function marketCap(supply:number,price:number,targetCap:number){if(supply<=0||price<0||targetCap<0)return null;return {currentCap:supply*price,impliedPrice:targetCap/supply};}
