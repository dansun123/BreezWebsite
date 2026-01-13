import { theme } from "@/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      style={{
        padding: "var(--section-padding) 0 48px",
        backgroundColor: colors.primary,
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "48px",
          }}
        >
          <div style={{ minWidth: "200px" }}>
            <span
              style={{ fontSize: "20px", fontWeight: 600, color: colors.white }}
            >
              Breez Labs
            </span>
            <p
              style={{
                color: colors.secondary,
                fontSize: "14px",
                marginTop: "12px",
                maxWidth: "300px",
                lineHeight: 1.6,
              }}
            >
              AI agents for accounting and back-office automation. Founded by
              MIT Math Olympians.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: "100px" }}>
              <h4
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                  color: colors.white,
                }}
              >
                Product
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#products"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Features
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#products"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    How it works
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ minWidth: "100px" }}>
              <h4
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                  color: colors.white,
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#about"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    About
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div style={{ minWidth: "100px" }}>
              <h4
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                  color: colors.white,
                }}
              >
                Legal
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Privacy
                  </a>
                </li>
                <li style={{ marginBottom: "12px" }}>
                  <a
                    href="#"
                    style={{
                      color: colors.secondary,
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: `1px solid ${colors.secondary}50`,
            color: colors.secondary,
            fontSize: "14px",
          }}
        >
          © 2025 Breez Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
