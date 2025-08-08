import type NodeCache from "node-cache";

declare global {
  // Augment the NodeJS global type to include storyblokCache
  // Use the instance type of NodeCache
  var storyblokCache: NodeCache | undefined;
}

export async function register() {
  const NC = (await import("node-cache")).default;
  const config = {
    stdTTL: 3600,
  };

  global.storyblokCache = new NC(config);
}
