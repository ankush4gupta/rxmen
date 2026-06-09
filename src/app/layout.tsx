import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RxMen — Supply Chain Finance",
  description: "Financing of global chain supply. Your reliable partner from the first step to your big day.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
