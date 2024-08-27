import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "../globals.css";

export const metadata: Metadata = {
  title: "vMax",
  description: "VTOP on MAX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider defaultColorScheme="light">
        <body>{children}</body>
      </MantineProvider>
    </html>
  );
}
