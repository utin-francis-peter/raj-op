import "./globals.css";
import "../style/styles.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import localFont from "next/font/local";

import BlogContextProvider from "@/context/blog.context";
import { Toaster } from "sonner";

export const metadata = {
  title: {
    default:
      "Raj Housing Properties - Real Estate Company in Goa | Buy 1BHK, 2BHK, and 3BHK modern apartments",
    template: "%s - Raj Housing Properties in Goa",
  },
  description:
    "1BHK, 2BHK, and 3BHK Flats in Goa: Buy Modern and Pocket Friendly Properties in Goa Close to Goa Airport, Beaches, and Local Attractions.",
};

const fontMuli = localFont({
  src: [
    {
      path: "../public/fonts/Muli-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Muli-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Muli-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Muli-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/Muli-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Muli-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Muli-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Muli-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/Muli-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Muli-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-muli",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BlogContextProvider>
        <body className={`${fontMuli.variable} ${fontMuli.className}`}>
          <Toaster />
          {children}
        </body>
      </BlogContextProvider>
    </html>
  );
}
