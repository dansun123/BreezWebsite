import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationGraphic from "@/components/IntegrationGraphic";
import TrackedLink from "@/components/TrackedLink";
import { theme } from "@/theme";

const { colors } = theme;

export const metadata: Metadata = {
  title: "Breez Labs | Accounts Receivable Outsourcing",
  description:
    "Outsource your accounts receivable to Breez Labs. AI-powered AR management that reduces costs, accelerates collections, and frees your team. Backed by Y Combinator and Google Ventures.",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          backgroundColor: colors.background,
          minHeight: "100vh",
        }}
      >
        <article
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          {/* Header */}
          <header style={{ marginBottom: "48px" }}>
            <h1
              style={{
                fontSize: "var(--heading-xl)",
                fontWeight: 700,
                color: colors.primary,
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Breez Labs
            </h1>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: colors.primary,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              Accounts receivable for services businesses where billing
              isn&apos;t simple. We read your contracts and communications to
              find money you&apos;re owed—then invoice, collect, and reconcile
              it for you.
            </p>
          </header>

          {/* Problem */}
          <section style={{ marginBottom: "48px" }}>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              If you run an agency, event company, consultancy, or any business
              where what you&apos;re owed depends on contracts, variable fees,
              and pass-through costs—you know the problem. Billing isn&apos;t as
              simple as &ldquo;customer bought X, charge $Y.&rdquo; Revenue
              comes from multiple sources per deal. Amounts depend on terms
              buried in contracts. And without someone cross-referencing every
              transaction, charges go unbilled and money quietly disappears.
              Traditional AR teams can&apos;t help—they start after the invoice
              exists. Breez starts before. We understand your business
              context and surface what you&apos;re owed, then handle invoicing,
              follow-ups, disputes, and reconciliation end-to-end.
            </p>
          </section>

          {/* Value Props */}
          <section style={{ marginBottom: "48px" }}>
            <IntegrationGraphic />
          </section>

          {/* How We Work */}
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              How we work
            </h2>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              We plug into your existing systems—your inbox, ERP, and payment
              platforms—and take ownership of the AR workflow end-to-end. Our
              team uses AI tooling to understand your contracts and
              communications, identify when money is owed, generate and send the
              right invoices, and manage customer follow-ups until you&apos;re
              paid. Every action is tracked and every payment is reconciled back
              to your system of record.
            </p>

            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
              }}
            >
              Getting started is simple—we plug into the tools you already use
              and start handling AR within days, not months. No system
              migrations, no long onboarding. If you&apos;re leaving money on
              the table and want to see what outsourcing AR looks like, we&apos;d
              love to talk.
            </p>
          </section>

          {/* Case Study Link */}
          <section
            style={{
              marginBottom: "48px",
              padding: "24px",
              backgroundColor: colors.callout,
              borderRadius: "8px",
              border: `1px solid ${colors.secondary}15`,
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginBottom: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontWeight: 500,
              }}
            >
              Case Study
            </p>
            <TrackedLink
              href="/case-studies/nowadays"
              eventName="case_study_link_clicked"
              eventProperties={{
                case_study: "nowadays",
                location: "home_page",
              }}
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: colors.primary,
                textDecoration: "none",
                display: "block",
                marginBottom: "8px",
              }}
            >
              How we help Nowadays collect missing payments automatically →
            </TrackedLink>
            <p
              style={{
                fontSize: "15px",
                color: colors.secondary,
                lineHeight: 1.6,
              }}
            >
              We read event context to figure out what&apos;s owed, generate
              and send the right invoices, and manage follow-ups—catching
              revenue that would otherwise never be billed.
            </p>
          </section>

          {/* Team & Backing */}
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              Team & backing
            </h2>
            <p
              style={{
                fontSize: "var(--text-md)",
                color: colors.secondary,
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              We&apos;re backed by Y Combinator and Google Ventures. Our team
              combines deep technical expertise (MIT) with AI-powered tooling to
              deliver AR results that traditional BPOs can&apos;t match—faster
              follow-ups, fewer errors, and full visibility into every dollar
              owed.
            </p>

            {/* Backed by logos */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              {/* Y Combinator */}
              <TrackedLink
                href="https://www.ycombinator.com"
                eventName="investor_link_clicked"
                eventProperties={{
                  investor: "Y Combinator",
                  location: "home_page",
                }}
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
              </TrackedLink>

              {/* Google Ventures */}
              <TrackedLink
                href="https://www.gv.com"
                eventName="investor_link_clicked"
                eventProperties={{
                  investor: "Google Ventures",
                  location: "home_page",
                }}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <Image
                  src="/images/gv-logo.svg"
                  alt="GV (Google Ventures)"
                  width={60}
                  height={32}
                  style={{
                    height: "32px",
                    width: "auto",
                    borderRadius: "4px",
                  }}
                />
                <span
                  style={{
                    fontWeight: 600,
                    color: colors.primary,
                    fontSize: "15px",
                  }}
                >
                  Google Ventures
                </span>
              </TrackedLink>
            </div>
          </section>

          {/* Trust Note */}
          <section
            style={{
              marginBottom: "48px",
              padding: "24px",
              backgroundColor: `${colors.primary}08`,
              borderRadius: "8px",
              borderLeft: `3px solid ${colors.primary}`,
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: colors.primary,
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              &ldquo;Your customers are our customers. We handle collections
              professionally and respectfully—protecting your relationships while
              making sure you get paid.&rdquo;
            </p>
          </section>

          {/* CTA */}
          <section style={{ textAlign: "center" }}>
            <TrackedLink
              href="https://calendly.com/daniel-breezlabs/intro-call"
              eventName="cta_clicked"
              eventProperties={{
                cta_text: "Talk to us",
                location: "home_page_footer",
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: colors.primary,
                color: colors.white,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Talk to us
            </TrackedLink>
            <p
              style={{
                fontSize: "14px",
                color: colors.secondary,
                marginTop: "12px",
              }}
            >
              15 minutes · No commitment
            </p>
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
