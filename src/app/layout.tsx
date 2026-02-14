import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";

export const metadata: Metadata = {
  title: "Lorenta Technologies",
  description: "Tech-enabled smart document printing kiosks",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
