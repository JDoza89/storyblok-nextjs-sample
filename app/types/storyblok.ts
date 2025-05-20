import type { ISbComponentType } from "storyblok-js-client";

export type StoryBlokComponentType = ISbComponentType<string> & {
  [index: string]: any;
};
