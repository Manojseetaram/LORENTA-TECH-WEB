import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "./smooth-scroll";
import { Poppins, Inter } from "next/font/google";
import { Toaster } from "sonner";

// export const metadata: Metadata = {
//   title: "Lorenta Technologies",
//   description: "Tech-enabled smart document printing kiosks",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/apple-touch-icon",
//   },
//   manifest: "/site.webmanifest",
// };


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});


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
       <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
         <Toaster position="bottom-right" richColors />
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
