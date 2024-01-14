import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import "../styles/globals.css";

export const metdata = {
  title: "Mixtral Chat",
  openGraph: {
    title: "Mixtral Chat",
    description: "Chat with Mixtral 8x7B",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metdata.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>Ⓜ️</text></svg>"
        />
      </Head>
      <body>
        {children}
        <Analytics />
      </body>
    </>
  );
}
