import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/TrackedLink";
import { theme } from "@/theme";

const { colors } = theme;

export default function NowadaysCaseStudy() {
  return (
    <main style={{ backgroundColor: colors.background, minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          padding: "20px 0",
          borderBottom: `1px solid ${colors.secondary}20`,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: colors.primary,
              textDecoration: "none",
            }}
          >
            Breez Labs
          </Link>
          <Link
            href="/"
            style={{
              fontSize: "14px",
              color: colors.secondary,
              textDecoration: "none",
            }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "80px 0 60px",
          backgroundColor: colors.primary,
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.accent,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Case Study
          </p>
          <h1
            style={{
              fontSize: "var(--heading-lg)",
              fontWeight: 700,
              color: colors.white,
              marginBottom: "24px",
              lineHeight: 1.2,
            }}
          >
            How Breez helps Nowadays collect missing payments from completed
            events
          </h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: `${colors.white}CC`,
              lineHeight: 1.6,
            }}
          >
            Reading event context to figure out what&apos;s owed, sending the
            right invoices, and managing follow-ups—catching revenue that would
            otherwise never be billed.
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          padding: "var(--section-padding) 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 var(--container-padding)",
          }}
        >
          {/* About the Company */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
            }}
          >
            About Nowadays
          </h2>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            <TrackedLink
              href="https://nowadays.ai"
              eventName="external_link_clicked"
              eventProperties={{
                company: "Nowadays",
                location: "case_study_page",
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: colors.primary,
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Nowadays
            </TrackedLink>{" "}
            is an AI-powered event planning agency specializing in corporate
            events and offsites. As an agent for their clients, they handle
            payments on their behalf—processing millions of dollars in
            pass-through transactions each month.
          </p>

          {/* The Challenge */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
              marginTop: "48px",
            }}
          >
            The Challenge
          </h2>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            After each event, Nowadays is owed money from multiple
            sources—commissions from hotels, sourcing fees from clients, and
            reimbursements for vendor payments made on behalf of customers. But
            the hardest part wasn&apos;t following up on invoices—it was figuring
            out that money was owed in the first place. Each event has different
            contract terms, fee structures, and payment arrangements. Without
            someone reading every contract and cross-referencing every
            transaction, charges would go unbilled and revenue would quietly
            disappear.
          </p>

          {/* The Solution */}
          <h2
            style={{
              fontSize: "var(--heading-md)",
              fontWeight: 700,
              color: colors.primary,
              marginBottom: "24px",
              marginTop: "48px",
            }}
          >
            What Breez Does
          </h2>
          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
            }}
          >
            Breez Labs now manages the accounts receivable process for
            Nowadays&apos;s completed events. Here&apos;s how it works:
          </p>

          <ol
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "24px",
              paddingLeft: "24px",
            }}
          >
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: colors.primary }}>
                Monitor the shared inbox
              </strong>{" "}
              — We watch Nowadays&apos;s email for event completions,
              contracts, payment confirmations, and customer correspondence to
              build a full picture of what&apos;s happening.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: colors.primary }}>
                Figure out what&apos;s owed
              </strong>{" "}
              — We read contracts and event details to determine commissions,
              sourcing fees, and reimbursements—then cross-reference against
              what&apos;s actually been paid.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: colors.primary }}>
                Send invoices and follow up
              </strong>{" "}
              — When we find a gap, we send the appropriate invoice to the
              customer or hotel and manage the back-and-forth until
              it&apos;s resolved.
            </li>
            <li style={{ marginBottom: "12px" }}>
              <strong style={{ color: colors.primary }}>
                Update the system of record
              </strong>{" "}
              — Once payment comes in, we reconcile it and update Nowadays&apos;s
              books so everything stays in sync.
            </li>
          </ol>

          <p
            style={{
              fontSize: "var(--text-md)",
              color: colors.secondary,
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            No more chasing payments. No more revenue left on the table. Breez
            handles the entire AR loop so the Nowadays team can focus on
            planning the next event.
          </p>

          {/* Callout */}
          <div
            style={{
              backgroundColor: colors.callout,
              borderRadius: "12px",
              padding: "24px",
              marginBottom: "48px",
              borderLeft: `4px solid ${colors.accent}`,
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: colors.secondary,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: colors.accent }}>The first day:</strong>{" "}
              We caught a $7,000 missing charge that had been buried in the
              noise—a flight credit that was never applied when a guest changed
              their travel plans. The internal team had missed it not because
              they weren&apos;t capable, but because they were focused on
              higher-leverage work.
            </p>
          </div>

          {/* Testimonial */}
          <div
            style={{
              backgroundColor: colors.callout,
              borderRadius: "12px",
              padding: "32px",
              border: `1px solid ${colors.secondary}20`,
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                color: colors.primary,
                lineHeight: 1.6,
                marginBottom: "20px",
                fontStyle: "italic",
              }}
            >
              &ldquo;These guys are world class. They really took the time to
              understand my problem and built a custom solution that fit
              perfectly into our current process.&rdquo;
            </p>
            <div>
              <p
                style={{
                  fontWeight: 600,
                  color: colors.primary,
                  fontSize: "16px",
                }}
              >
                Nowadays
              </p>
              <p style={{ fontSize: "14px", color: colors.secondary }}>
                AI-Powered Event Planning Agency
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              textAlign: "center",
              padding: "48px 0",
              borderTop: `1px solid ${colors.secondary}20`,
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: colors.primary,
                marginBottom: "16px",
              }}
            >
              Ready to stop chasing payments?
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: colors.secondary,
                marginBottom: "24px",
              }}
            >
              Let&apos;s discuss how Breez can handle your accounts receivable.
            </p>
            <TrackedLink
              href="https://calendly.com/daniel-breezlabs/intro-call"
              eventName="cta_clicked"
              eventProperties={{
                cta_text: "Schedule a Call",
                location: "case_study_page",
              }}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: colors.accent,
                color: colors.white,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: "8px",
                fontSize: "16px",
                textDecoration: "none",
              }}
            >
              Schedule a Call
            </TrackedLink>

            {/* Backed By */}
            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: `1px solid ${colors.secondary}20`,
              }}
            >
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
                    location: "case_study_page",
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
                    location: "case_study_page",
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
