import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aishwarya Bagade",
  description:
    "Hey, I'm Aishwarya, a UI/UX designer, I create intuitive and visually appealing digital experiences, blending user-centered design principles with creativity to enhance user satisfaction and engagement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
