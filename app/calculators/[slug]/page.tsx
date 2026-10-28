import type {Metadata} from 'next';import {notFound} from 'next/navigation';import Link from 'next/link';import Calculator from '../../../components/Calculator';
import { tools, type ToolSlug } from '../../../lib/calculators';
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return tools.map(t=>({slug:t.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const tool=tools.find(t=>t.slug===slug);
return {
  title: tool?.name ?? 'Calculator',
  description: tool?.description,
  alternates: {
    canonical: `https://www.cryptocalcgrid.com/calculators/${slug}`,
  },
};
}
export default async function CalculatorPage({params}:Props){const {slug}=await params;const tool=tools.find(t=>t.slug===slug);if(!tool)notFound();return <main className="shell calculator-page"><Link className="back" href="/">← All calculators</Link><h1>{tool.name}</h1><p className="subhead">{tool.description}</p><Calculator slug={slug as ToolSlug}/><section className="info"><h2>How this calculator works</h2><p>{slug==='crypto-profit-calculator'?'The tool divides your investment by the purchase price to estimate token quantity, then multiplies by selling price and subtracts the initial investment and entered fees.':slug==='crypto-dca-calculator'?'The tool models equal contributions at the end of each period using a constant effective annual return. It does not use historical market prices or forecast future crypto returns.':'Market capitalization equals circulating supply multiplied by price. Target implied price equals target market capitalization divided by circulating supply. Changes in circulating supply will change the result.'}</p></section></main>}
