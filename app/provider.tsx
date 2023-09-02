// Chakra needs provider
"use client";

import { MantineProvider } from "@mantine/core";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      {children}
    </MantineProvider>
  );
}
