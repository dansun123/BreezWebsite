"use client";

import { theme } from "@/theme";
import IntegrationGraphic from "./IntegrationGraphic";

const { colors } = theme;

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "120px",
        paddingBottom: "var(--section-padding)",
        background: colors.background,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <div className="responsive-grid-2" style={{ alignItems: "center" }}>
          {/* Left Content */}
          <div>
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginBottom: "24px",
              }}
            >
              Founded by MIT Math Olympians & AI Experts
            </p>

            <h1
              style={{
                fontSize: "var(--heading-lg)",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: "24px",
                lineHeight: 1.1,
              }}
            >
              Accounting for
              <br />
              event planners
            </h1>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                marginBottom: "36px",
                maxWidth: "480px",
                lineHeight: 1.6,
              }}
            >
              Accelerate your team's AR/AP, reconciliation, and bookkeeping with
              custom AI agents built by experts to get a clear and auditable
              picture of your finances.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://calendly.com/daniel-breezlabs/intro-call"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: colors.accent,
                  color: colors.white,
                  fontWeight: 600,
                  padding: "16px 32px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Schedule a Call
              </a>
              <a
                href="#products"
                style={{
                  color: colors.primary,
                  fontWeight: 500,
                  padding: "16px 24px",
                  fontSize: "16px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: `1px solid ${colors.secondary}`,
                  borderRadius: "8px",
                }}
              >
                Learn more &rarr;
              </a>
            </div>

            {/* Backed by section */}
            <div style={{ marginBottom: "32px" }}>
              <p
                style={{
                  fontSize: "13px",
                  color: colors.secondary,
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Backed by
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {/* Y Combinator */}
                <a
                  href="https://www.ycombinator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#FF6600",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.white,
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    Y
                  </div>
                  <span
                    style={{
                      fontWeight: 600,
                      color: colors.primary,
                      fontSize: "15px",
                    }}
                  >
                    Y Combinator
                  </span>
                </a>

                {/* Google Ventures */}
                <a
                  href="https://www.gv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: colors.primary,
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: colors.white,
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    GV
                  </div>
                  <span
                    style={{
                      fontWeight: 600,
                      color: colors.primary,
                      fontSize: "15px",
                    }}
                  >
                    Google Ventures
                  </span>
                </a>
              </div>
            </div>

            {/* Trusted by */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: colors.secondary,
                fontSize: "14px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontWeight: 500 }}>Trusted by</span>
              <span style={{ color: colors.primary, fontWeight: 600 }}>
                Nowadays
              </span>
              <span>and growing teams</span>
            </div>
          </div>

          {/* Right Visual - Integration Graphic */}
          <div className="desktop-only" style={{ display: "block" }}>
            <IntegrationGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
