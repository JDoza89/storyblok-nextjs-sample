import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Page from "@/components/Page";
import Config from "@/components/Config";
import HeaderMenu from "@/components/HeaderMenu";
import MenuLink from "@/components/MenuLink";
import Hero from "@/components/Hero";
import Article from "@/components/Article";
import AllArticles from "@/components/AllArticles";
import PopularArticles from "../../../components/PopularArticles";
import Carousel from "@/components/Carousel";
import Filters from "@/components/Filters";

export const storyblokComponents = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  headerMenu: HeaderMenu,
  menuLink: MenuLink,
  config: Config,
  hero: Hero,
  article: Article,
  allArticles: AllArticles,
  popularArticles: PopularArticles,
  carousel: Carousel,
  filters: Filters,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOCK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
  enableFallbackComponent: true,
});
