import { theme } from "@/theme";

const { colors } = theme;

const features = [
  {
    title: "Accounts Receivable",
    description:
      "AI agents track invoices, send reminders, and reconcile payments automatically.",
  },
  {
    title: "Accounts Payable",
    description:
      "Process bills, match POs, and schedule payments without manual data entry.",
  },
  {
    title: "Reconciliation",
    description:
      "Automatically match transactions across bank feeds, invoices, and receipts.",
  },
  {
    title: "Financial Clarity",
    description:
      "Get a real-time, accurate picture of your business finances at any moment.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      style={{
        padding: "var(--section-padding) 0",
        backgroundColor: colors.callout,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: colors.secondary,
            marginBottom: "16px",
          }}
        >
          How it works
        </p>
        <h2
          style={{
            fontSize: "var(--heading-xl)",
            fontWeight: 700,
            color: colors.primary,
            marginBottom: "24px",
          }}
        >
          AI-powered bookkeeping
        </h2>
        <p
          style={{
            fontSize: "var(--text-lg)",
            color: colors.secondary,
            marginBottom: "48px",
            maxWidth: "600px",
          }}
        >
          Deploy custom AI agents that handle your accounting workflows
          end-to-end, so you can focus on growing your business.
        </p>

        <div className="responsive-grid-4">
          {features.map((feature, i) => (
            <div
              key={i}
              style={{
                padding: "var(--card-padding)",
                backgroundColor: colors.white,
                borderRadius: "12px",
                border: `1px solid ${colors.secondary}30`,
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: colors.primary,
                  marginBottom: "12px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{ fontSize: "15px", color: colors.secondary, lineHeight: 1.6 }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
