import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const gothic = Gothic_A1({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>LinkedIn: Log In or Sign Up</title>
        <meta name="description" content="1 billion members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities." />

        <meta property="og:url" content="https://www.linkedin.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="LinkedIn: Log In or Sign Up" />
        <meta property="og:description" content="1 billion members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities." />
        <meta property="og:image" content="/favicon.ico" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="linkedin.com" />
        <meta property="twitter:url" content="https://www.linkedin.com/" />
        <meta name="twitter:title" content="LinkedIn: Log In or Sign Up" />
        <meta name="twitter:description" content="1 billion members | Manage your professional identity. Build and engage with your professional network. Access knowledge, insights and opportunities." />
        <meta name="twitter:image" content="/favicon.ico" />
      </head>
      <body className={`bg-bg text-text ${gothic.className}`}>{children}</body>
    </html>
  );
}
