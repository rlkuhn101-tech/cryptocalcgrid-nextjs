
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | CryptoCalcGrid",
  description:
    "Learn about CryptoCalcGrid.com and our mission to provide free, easy-to-use cryptocurrency calculators.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 px-6 py-12 text-slate-200">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-cyan-400 hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-10 text-4xl font-bold text-white">
          About CryptoCalcGrid
        </h1>

        <p className="mt-6 text-lg leading-8">
          CryptoCalcGrid.com is a free online resource
          designed to make cryptocurrency calculations
          simpler, clearer, and more accessible to everyone.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-cyan-400">
          Our Mission
        </h2>

        <p className="mt-4 leading-8">
          Our mission is to help cryptocurrency enthusiasts,
          investors, and beginners explore digital asset
          calculations through straightforward, easy-to-use
          tools.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-cyan-400">
          What We Offer
        </h2>

        <p className="mt-4 leading-8">
          CryptoCalcGrid provides a growing collection of
          15 free cryptocurrency calculators covering
          topics such as investment profit and loss,
          dollar-cost averaging, market capitalization,
          staking rewards, price targets, and other
          cryptocurrency calculations.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-cyan-400">
          Built for Clarity
        </h2>

        <p className="mt-4 leading-8">
          Our calculators are designed to provide useful
          estimates with understandable inputs and
          assumptions. We aim to make complex financial
          calculations easier to explore without requiring
          expensive subscriptions or complicated
          registration.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-cyan-400">
          Our Commitment
        </h2>

        <p className="mt-4 leading-8">
          We strive to provide accessible, informative,
          and practical cryptocurrency calculation tools.
          As the cryptocurrency industry evolves, we
          plan to expand and improve our collection
          of calculators.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-cyan-400">
          Important Information
        </h2>

        <p className="mt-4 leading-8">
          All calculations are educational estimates
          based on user inputs and stated assumptions.
          Cryptocurrency markets are highly volatile,
          and actual results may differ significantly.
          Nothing on CryptoCalcGrid.com constitutes
          personalized financial, investment, tax,
          or legal advice.
        </p>

        <div className="mt-12 border-t border-slate-700 pt-6">
          <Link
            href="/"
            className="font-semibold text-cyan-400 hover:underline"
          >
            Return to CryptoCalcGrid.com
          </Link>
        </div>
      </div>
    </main>
  );
}
