import { ABeeZee as MainFont } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
  title: "Next News API",
  description: "News API made by riad-azz",
};

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
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
