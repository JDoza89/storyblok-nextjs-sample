import type { Metadata } from "next";
import "./globals.css";
import { StoryblokProvider } from "@/components/StoryblokProvider";

export const metadata: Metadata = {
  title: "Sample App",
  description: "Onboarding App",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"}>
      <body className={"m-auto"}>{children}</body>
    </html>
  );
}
