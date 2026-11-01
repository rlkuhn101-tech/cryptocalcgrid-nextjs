
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | CryptoCalcGrid",
  description:
    "Learn how CryptoCalcGrid.com handles privacy, analytics, cookies, and website information.",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p>Last Updated: November 1, 2026</p>

        <p>
          Welcome to CryptoCalcGrid.com. We respect your
          privacy and are committed to explaining how
          information is handled when you use our website.
        </p>

        <h2>1. Information You Provide</h2>
        <p>
          Our cryptocurrency calculators are designed to
          perform calculations directly within your browser.
          We do not require an account to use them.
        </p>
        <p>
          Calculator inputs are not intentionally collected
          or stored by CryptoCalcGrid.com. Please do not
          enter passwords, wallet recovery phrases, or
          other sensitive information.
        </p>

        <h2>2. Google Analytics</h2>
        <p>
          We use Google Analytics 4 to understand website
          traffic, visitor engagement, and how our tools
          are used.
        </p>
        <p>
          Google Analytics may collect information such as
          approximate location, browser type, device
          information, pages visited, and interactions
          with the website. Google may use cookies or
          similar technologies for these purposes.
        </p>
        <p>
          Learn more about Google's privacy practices at{" "}
          <a
            href="https://policies.google.com/privacy"
            style={{ color: "#22d3ee" }}
          >
            Google's Privacy Policy
          </a>.
        </p>

        <h2>3. Cookies</h2>
        <p>
          Our website and third-party services may use
          cookies or similar technologies for analytics,
          functionality, and, if introduced in the future,
          advertising.
        </p>
        <p>
          You can manage cookies through your browser
          settings. Additional consent controls may be
          provided where required by applicable law.
        </p>

        <h2>4. Advertising</h2>
        <p>
          CryptoCalcGrid.com may display advertising in
          the future, including advertisements provided
          through Google AdSense.
        </p>
        <p>
          If advertising is introduced, this policy will
          be updated to describe the relevant advertising
          partners, cookies, and privacy choices.
        </p>

        <h2>5. Contact Information</h2>
        <p>
          If you contact us by email, we may receive your
          name, email address, and any information you
          choose to include in your message. We use this
          information to respond to your inquiry.
        </p>

        <h2>6. Third-Party Websites</h2>
        <p>
          Our website may contain links to external
          websites. We are not responsible for their
          privacy practices or content. Please review
          their privacy policies separately.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We take reasonable measures to protect our
          website and information under our control.
          However, no internet transmission or storage
          system can be guaranteed completely secure.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          CryptoCalcGrid.com is intended for a general
          audience and is not directed toward children
          under the age of 13. We do not knowingly
          collect personal information from children
          under 13.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy as our
          website, services, or legal obligations change.
          Updates will be posted on this page with a
          revised date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For questions about this Privacy Policy,
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
