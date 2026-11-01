import Link from 'next/link';import {tools} from '../lib/calculators';

import SaveToHomeScreen from '../components/SaveToHomeScreen';

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">YOUR EVERYDAY CRYPTO TOOLKIT</p>
        <h1>
          Smarter crypto decisions.
          <br />
          <span className="accent">Simple calculations.</span>
        </h1>
        <p className="subhead">
          Explore free, responsive crypto calculators with clear inputs and instantly updated results.
        </p>
        <a className="primary" href="#calculators">
          Explore calculators ↓
        </a>
        <SaveToHomeScreen />
      </section>

      <section id="calculators">
        <h2>Popular crypto calculators</h2>
        <div className="tool-grid">
          {tools.map(t => (
            <Link
              className="tool-card"
              href={`/calculators/${t.slug}`}
              key={t.slug}
            >
              <h3>{t.name} ↗</h3>
              <p>{t.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="info">
        <h2>Built for clarity</h2>
        <p>
          Each tool explains its assumptions. DCA projections are hypothetical,
          not historical backtests. Historical comparisons will be added only
          after reliable source data and calculation methodology are integrated.
        </p>
      </section>

<section className="info">
  <h2>Explore More Financial Calculators</h2>
  <p>
    Looking for mortgage, loan, retirement, savings,
    or investment calculators? Visit CapitalRewards.com
    for 50 free financial calculators to help you
    make informed financial decisions.
  </p>
  <p>
    <a
      href="https://www.capitalrewards.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#22d3ee",
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      Visit CapitalRewards.com
    </a>
  </p>
</section>

      
    </main>
  );
}

 
