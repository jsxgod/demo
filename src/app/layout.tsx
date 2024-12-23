import "@/styles/main.scss";
import { Plus_Jakarta_Sans } from "next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
  weight: ["400", "500"],
});

export const metadata = {
  title: "180HB Demo",
  description: "Dynamic CMS cards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable}`}>{children}</body>
    </html>
  );
}
