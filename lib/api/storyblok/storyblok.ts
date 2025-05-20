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

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOCK_PREVIEW_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
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
  },
  enableFallbackComponent: true,
});
