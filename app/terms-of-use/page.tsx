
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | CryptoCalcGrid",
  description:
    "Read the terms and conditions for using CryptoCalcGrid.com's free cryptocurrency calculators.",
};

export default function TermsOfUsePage() {
  return (
    <main
      style={{
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
        minHeight: "100vh",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        <Link href="/" style={{ color: "#22d3ee" }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "36px", marginTop: "32px" }}>
          Terms of Use
        </h1>

        <p>Last Updated: November 1, 2026</p>

        <p>
          Welcome to CryptoCalcGrid.com. By accessing or
          using our website and cryptocurrency calculators,
          you agree to these Terms of Use. If you do not
          agree, please discontinue using the website.
        </p>

        <h2>1. Purpose of Our Website</h2>
        <p>
          CryptoCalcGrid.com provides free cryptocurrency
          calculators and educational information to help
          visitors explore hypothetical financial scenarios.
        </p>
        <p>
          Our tools are intended for informational and
          educational purposes only.
        </p>

        <h2>2. Not Financial or Investment Advice</h2>
        <p>
          Nothing on CryptoCalcGrid.com constitutes financial,
          investment, legal, tax, or other professional advice.
        </p>
        <p>
          We do not recommend buying, selling, or holding
          any particular cryptocurrency or investment.
          Always conduct your own research and consider
          consulting a qualified professional before making
          financial decisions.
        </p>

        <h2>3. Calculator Accuracy</h2>
        <p>
          Our calculators generate estimates based on
          information entered by users and the mathematical
          formulas or assumptions used by each tool.
        </p>
        <p>
          Although we strive for accuracy, we do not
          guarantee that calculations are complete,
          error-free, current, or suitable for any
          particular financial decision.
        </p>
        <p>
          Actual results may differ significantly due to
          cryptocurrency price volatility, transaction
          fees, taxes, market conditions, and other factors.
        </p>

        <h2>4. Cryptocurrency Risks</h2>
        <p>
          Cryptocurrency markets are highly volatile and
          involve substantial financial risk, including
          the potential loss of your entire investment.
        </p>
        <p>
          Past performance, hypothetical projections,
          and calculated estimates do not guarantee
          future results.
        </p>

        <h2>5. User Responsibilities</h2>
        <p>
          You are responsible for verifying calculator
          inputs, reviewing assumptions, and independently
          evaluating any information before relying on it.
        </p>
        <p>
          You agree not to misuse the website, interfere
          with its operation, or attempt unauthorized
          access to its systems.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          The original website design, text, branding,
          and other original materials on CryptoCalcGrid.com
          are protected by applicable intellectual
          property laws.
        </p>
        <p>
          You may use our calculators for lawful personal
          or business purposes, but you may not reproduce
          or redistribute protected website content
          without permission, except as permitted by law.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party
          websites and services. We do not control or
          endorse their content, security, or practices.
        </p>

        <h2>8. Availability of Services</h2>
        <p>
          We may modify, update, suspend, or discontinue
          any calculator, feature, or website content
          at any time without prior notice.
        </p>

        <h2>9. Disclaimer of Warranties</h2>
        <p>
          To the extent permitted by applicable law,
          CryptoCalcGrid.com and its services are
          provided "as is" and "as available," without
          warranties of any kind, express or implied.
        </p>

        <h2>10. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law,
          the website operator shall not be liable for
          losses or damages arising from reliance on
          calculator results, website information, or
          interruptions in service.
        </p>
        <p>
          Nothing in these Terms excludes liability
          that cannot lawfully be excluded.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We may revise these Terms of Use periodically.
          Updated terms will be posted on this page
          with a revised effective date.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about these Terms of Use,
          please visit our{" "}
          <Link
            href="/contact"
            style={{ color: "#22d3ee" }}
          >
            Contact Us
          </Link>{" "}
          page.
        </p>

        <div
          style={{
            borderTop: "1px solid #334155",
            marginTop: "48px",
            paddingTop: "24px",
          }}
        >
          <Link href="/" style={{ color: "#22d3ee" }}>
            Return to CryptoCalcGrid.com
          </Link>
        </div>
      </div>
    </main>
  );
}
