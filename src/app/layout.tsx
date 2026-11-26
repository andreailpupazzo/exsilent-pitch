import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body-face",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExSilent Ytango Mix",
  description: "Go-to-market strategy for the ExSilent Ytango Mix in the UK private market.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper focus:rounded-full"
        >
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
