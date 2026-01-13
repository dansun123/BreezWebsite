"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { theme } from "@/theme";

const { colors } = theme;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.callout}`,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: colors.primary,
            textDecoration: "none",
          }}
        >
          Breez Labs
        </a>

        {/* Desktop Navigation */}
        <div
          className="desktop-only"
          style={{ display: "flex", alignItems: "center", gap: "40px" }}
        >
          <a
            href="#products"
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            How it works
          </a>
          <a
            href="/case-studies/nowadays"
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            Case Study
          </a>
          <a
            href="#about"
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "15px",
            }}
          >
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="desktop-only">
          <a
            href="https://calendly.com/daniel-breezlabs/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colors.accent,
              color: colors.white,
              padding: "10px 20px",
              borderRadius: "24px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get a demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} color={colors.primary} />
          ) : (
            <Menu size={24} color={colors.primary} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="mobile-only"
          style={{
            display: "none",
            flexDirection: "column",
            backgroundColor: colors.white,
            borderTop: `1px solid ${colors.callout}`,
            padding: "16px var(--container-padding)",
            gap: "16px",
          }}
        >
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "16px",
              padding: "12px 0",
              borderBottom: `1px solid ${colors.callout}`,
            }}
          >
            How it works
          </a>
          <a
            href="/case-studies/nowadays"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "16px",
              padding: "12px 0",
              borderBottom: `1px solid ${colors.callout}`,
            }}
          >
            Case Study
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              color: colors.secondary,
              textDecoration: "none",
              fontSize: "16px",
              padding: "12px 0",
            }}
          >
            About
          </a>
          <a
            href="https://calendly.com/daniel-breezlabs/intro-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              backgroundColor: colors.accent,
              color: colors.white,
              padding: "14px 20px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 500,
              textDecoration: "none",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            Get a demo
          </a>
        </div>
      )}
    </nav>
  );
}
