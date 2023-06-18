import { Inter as MainFont } from "next/font/google";
import { mainMetadata } from "@/configs/seo";
import "@/styles/globals.css";

export const metadata = mainMetadata;

const mainFont = MainFont({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFont.className}>
      <body>{children}</body>
    </html>
  );
}
