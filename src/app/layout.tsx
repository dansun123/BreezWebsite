import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Breez Labs | Accounts Receivable Outsourcing",
  description: "Outsource your accounts receivable to Breez Labs. AI-powered AR management that reduces costs, accelerates collections, and frees your team. Backed by Y Combinator and Google Ventures.",
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
