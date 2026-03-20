import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Dhaval Patel | AI/ML Engineer",
  description:
    "CS graduate student at UMass Amherst specializing in AI/ML engineering, LLMs, RAG, deep learning, and full-stack development. Building intelligent systems that solve real-world problems.",
  keywords: [
    "Dhaval Patel",
    "AI Engineer",
    "ML Engineer",
    "Full Stack Developer",
    "UMass Amherst",
    "Machine Learning",
    "Deep Learning",
    "LLM",
    "RAG",
  ],
  authors: [{ name: "Dhaval Patel" }],
  openGraph: {
    title: "Dhaval Patel | AI/ML Engineer",
    description:
      "CS graduate student at UMass Amherst specializing in AI/ML engineering and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
