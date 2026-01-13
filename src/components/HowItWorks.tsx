"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { theme } from "@/theme";

const { colors } = theme;

const steps = [
  {
    image: "/images/process/discover.png",
    caption: "Discover",
  },
  {
    image: "/images/process/build.png",
    caption: "Build",
  },
  {
    image: "/images/process/deploy.png",
    caption: "Deploy",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontSize: "14px",
              color: colors.secondary,
              marginBottom: "16px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Our Process
          </p>
          <h2
            style={{
              fontSize: "var(--heading-xl)",
              fontWeight: 700,
              color: colors.primary,
            }}
          >
            From chaos to clarity
          </h2>
        </motion.div>

        <div className="responsive-grid-3" style={{ gap: "48px" }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ textAlign: "center" }}
            >
              {/* Image container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1",
                  marginBottom: "24px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: colors.white,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src={step.image}
                  alt={step.caption}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Step number + Caption */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: colors.primary,
                    color: colors.white,
                    fontSize: "14px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {index + 1}
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: colors.primary,
                  }}
                >
                  {step.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection arrows (desktop only) */}
        <div
          className="desktop-only"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "200px",
            marginTop: "-280px",
            marginBottom: "200px",
            pointerEvents: "none",
          }}
        >
          {[0, 1].map((i) => (
            <svg
              key={i}
              width="60"
              height="24"
              viewBox="0 0 60 24"
              fill="none"
              style={{ opacity: 0.3 }}
            >
              <path
                d="M0 12H50M50 12L40 4M50 12L40 20"
                stroke={colors.secondary}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>
    </section>
  );
}
