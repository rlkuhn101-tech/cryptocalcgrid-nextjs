
"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const contactEmail = "rlkuhn101@gmail.com";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = encodeURIComponent(
      `CryptoCalcGrid.com Inquiry from ${name}`
    );
    const body = encodeURIComponent(message);

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#e2e8f0",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <Link href="/" style={{ color: "#22d3ee" }}>
          ← Back to Home
        </Link>

        <h1 style={{ fontSize: "36px", marginTop: "32px" }}>
          Contact Us
        </h1>

        <p style={{ marginTop: "20px", lineHeight: "1.8" }}>
          Have a question, suggestion, or feedback about
          CryptoCalcGrid.com? We'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} style={{ marginTop: "32px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "8px" }}>
            Your Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "24px",
              borderRadius: "8px",
              backgroundColor: "#1e293b",
              color: "#ffffff",
              border: "1px solid #475569",
            }}
          />

          <label htmlFor="message" style={{ display: "block", marginBottom: "8px" }}>
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "24px",
              borderRadius: "8px",
              backgroundColor: "#1e293b",
              color: "#ffffff",
              border: "1px solid #475569",
            }}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#22d3ee",
              color: "#0f172a",
              padding: "12px 24px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "14px", color: "#94a3b8" }}>
          Clicking Send Message opens your email application
          with your message prepared. You must send the email
          from there.
        </p>

        <div
          style={{
            marginTop: "48px",
            borderTop: "1px solid #334155",
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
