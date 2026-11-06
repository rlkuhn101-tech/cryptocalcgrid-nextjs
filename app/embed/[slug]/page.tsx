
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Calculator from "../../../components/Calculator";
import { tools, type ToolSlug } from "../../../lib/calculators";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    return { title: "Calculator Not Found" };
  }

  return {
    title: `${tool.name} - Embed`,
    description: tool.description,
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://www.cryptocalcgrid.com/calculators/${slug}`,
    },
  };
}

export default async function EmbedCalculatorPage({
  params,
}: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) notFound();

  return (
    <main
      style={{
        padding: "16px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <Calculator slug={slug as ToolSlug} />

      <footer
        style={{
          textAlign: "center",
          marginTop: "24px",
          padding: "16px",
          borderTop: "1px solid #334155",
          fontSize: "14px",
        }}
      >
        <Link
          href={`/calculators/${slug}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#38bdf8",
            fontWeight: 700,
            textDecoration: "underline",
          }}
        >
          Powered by CryptoCalcGrid.com
        </Link>
      </footer>
    </main>
  );
}
