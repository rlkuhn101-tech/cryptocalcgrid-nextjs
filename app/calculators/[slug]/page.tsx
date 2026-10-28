
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Calculator from '../../../components/Calculator';
import { tools, type ToolSlug } from '../../../lib/calculators';
import { calculatorContent } from '../../../lib/calculatorContent';
import { calculatorFAQs } from '../../../lib/calculatorFAQs';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map(tool => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);

  return {
    title: tool?.name ?? 'Calculator',
    description: tool?.description,
    alternates: {
      canonical: `https://www.cryptocalcgrid.com/calculators/${slug}`
    }
  };
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);

  if (!tool) notFound();

  const content = calculatorContent[slug];
  const faqs = calculatorFAQs[slug] ?? [];

  return (
    <main className="shell calculator-page">
      <Link className="back" href="/">
        ← All calculators
      </Link>

      <h1>{tool.name}</h1>
      <p className="subhead">{tool.description}</p>

      <Calculator slug={slug as ToolSlug} />

      {content && (
        <section className="info">
          <h2>How this calculator works</h2>
          <p>{content.explanation}</p>

          <h2>Calculation Formula</h2>
          <p>{content.formula}</p>

          <h2>Example Calculation</h2>
          <p>{content.example}</p>

          <h2>Important Considerations</h2>
          <p>{content.note}</p>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="info">
          <h2>Frequently Asked Questions</h2>

          {faqs.map((faq, index) => (
            <details key={index}>
              <summary
                style={{
                  cursor: 'pointer',
                  fontWeight: 600,
                  padding: '12px 0'
                }}
              >
                {faq.question}
              </summary>

              <p style={{ paddingBottom: '12px' }}>
                {faq.answer}
              </p>
            </details>
          ))}
        </section>
      )}
    </main>
  );
}
