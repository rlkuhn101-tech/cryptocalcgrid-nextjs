
"use client";

import { useState } from "react";

type Props = {
  slug: string;
};

export default function EmbedCodeButton({ slug }: Props) {
  const [copied, setCopied] = useState(false);

  const embedCode = `<iframe
  src="https://www.cryptocalcgrid.com/embed/${slug}"
  width="100%"
  height="850"
  style="border:0;border-radius:12px;"
  loading="lazy"
  title="CryptoCalcGrid Calculator"
></iframe>`;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
    } catch {
      setCopied(false);
      alert("Unable to copy automatically. Please try again.");
    }
  }

  return (
    <div style={{ marginTop: "24px", marginBottom: "24px" }}>
      <button
        type="button"
        onClick={copyCode}
        style={{
          backgroundColor: "#38bdf8",
          color: "#0f172a",
          border: "none",
          borderRadius: "8px",
          padding: "12px 20px",
          fontSize: "15px",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        {copied ? "✓ Embed Code Copied!" : "Copy Embed Code"}
      </button>

      <p
        style={{
          color: "#94a3b8",
          fontSize: "13px",
          marginTop: "8px",
        }}
      >
        Add this free cryptocurrency calculator to your website.
      </p>
    </div>
  );
}
