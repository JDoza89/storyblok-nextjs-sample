import Config from "@/components/Config";
import DraftModeWrapper from "@/components/DraftModeWrapper";
import Footer from "@/components/Footer";
import { draftMode } from "next/headers";
import { fetchStory } from "@/lib/api/storyblok/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicago Cocktails",
  description: "Sample Storyblok App",
  icons: {
    icon: "/ChicagoCocktails.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en-US" | "es" }>;
}>) {
  const lang = (await params).lang ?? "en-US";
  const pageData = await fetchStory("config", lang);
  const { isEnabled } = await draftMode();
  return (
    <html lang={lang}>
      <body className={"m-auto"}>
        <DraftModeWrapper enabled={isEnabled} />
        <Config blok={pageData.content} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
