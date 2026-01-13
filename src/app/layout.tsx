import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breez Labs | AI Agents for Back Office Automation",
  description: "Automate AR/AP, reconciliation, and bookkeeping with AI agents. Founded by MIT Math Olympians, backed by Y Combinator and Google Ventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
