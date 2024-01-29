import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "../styles/globals.css";

export const metdata = {
  title: "AI Hub",
  openGraph: {
    title: "AI Hub",
    description: "AI Hub",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metdata.title}</title>
        
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </>
  );
}
