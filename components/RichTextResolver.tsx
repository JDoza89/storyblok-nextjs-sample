import React, { ReactElement } from "react";
import {
  MarkTypes,
  richTextResolver,
  StoryblokRichTextOptions,
} from "@storyblok/richtext";
import { convertAttributesInElement } from "@storyblok/react";

const options: StoryblokRichTextOptions<ReactElement> = {
  renderFn: React.createElement,
  keyedResolvers: true,
  resolvers: {
    [MarkTypes.LINK]: (node) => {
      return (
        <a
          className="text-blue-500 hover:underline"
          href={node.attrs?.href}
          target={node.attrs?.target}
        >
          {node.text}
        </a>
      );
    },
  },
};

export const renderRichtext = (doc: any) => {
  if (!doc) return null;
  const html = richTextResolver(options).render(doc);
  // Convert attributes in element to JSX. Refer to the `convertAttributesInElement` function in the playground/react
  const formattedHtml = convertAttributesInElement(html);
  return <>{formattedHtml}</>;
};
