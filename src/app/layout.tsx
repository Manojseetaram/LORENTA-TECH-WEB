import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";

// export const metadata: Metadata = {
//   title: "Lorenta Technologies",
//   description: "Tech-enabled smart document printing kiosks",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon",
//   },
//   manifest: "/site.webmanifest",
// };

export const metadata: Metadata = {
  title: "Lorenta Technologies",
  description: "Tech-enabled smart document printing kiosks",
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





// export const metadata: Metadata = {
//   title: "Lorenta Technologies",
//   description: "Tech-enabled smart document printing kiosks",
//   icons: {
//     icon: [
//       {
//         url: "/favicon-light.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/favicon-dark.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//     ],
//   },
// };
