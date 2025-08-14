import Config from "@/components/Config";
import DraftModeWrapper from "@/components/DraftModeWrapper";
import Footer from "@/components/Footer";
import { StoryblokProvider } from "@/components/StoryblokProvider";
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
  return (
    <html lang={lang}>
      <body className={"m-auto"}>
        <DraftModeWrapper />
        <Config blok={pageData.content} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
