import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "../styles/globals.css";

export const metdata = {
  title: "Ricky AI 4",
  openGraph: {
    title: "RickyAI 4",
    description: "RickyAI 4",
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
