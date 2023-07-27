// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { Nova_Round } from "next/font/google";
const novafont = Nova_Round({ weight: "400", subsets: ["latin"] });

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

export const theme = extendTheme({ colors });

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  // const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <ChakraProvider theme={theme}>
      <span className={novafont.className}></span>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
