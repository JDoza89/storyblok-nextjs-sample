import { getStoryblokApi } from "@/lib/api/storyblok/storyblok";
import { draftMode } from "next/headers";
import Filter from "./Filter";
import { Suspense } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const getSeasons = async () => {
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi();
  const { data: seasons } = await storyblokApi.getStories({
    version: isEnabled ? "draft" : "published",
    starts_with: "categories/season/",
    is_startpage: false,
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return seasons;
};
const getLiquors = async () => {
  const { isEnabled } = await draftMode();
  const storyblokApi = getStoryblokApi();
  const { data: liquors } = await storyblokApi.getStories({
    version: isEnabled ? "draft" : "published",
    starts_with: "categories/liquor/",
    is_startpage: false,
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return liquors;
};

const FilterSuspense = async ({
  paramKey,
  title,
  fn,
}: {
  paramKey: string;
  title: string;
  fn: () => Promise<any>;
}) => {
  const data = await fn();
  return <Filter paramKey={paramKey} title={title} options={data.stories} />;
};
const Filters = async ({ blok }: { blok: any }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="mx-auto lg:px-30 md:px-24 w-full flex flex-wrap items-center gap-4"
    >
      <Suspense fallback={<FilterSkeleton title={"Seasons"} />}>
        <FilterSuspense paramKey="season" title={"Seasons"} fn={getSeasons} />
      </Suspense>
      <Suspense fallback={<FilterSkeleton title={"Liquors"} />}>
        <FilterSuspense paramKey="liquor" title={"Liquors"} fn={getLiquors} />
      </Suspense>
    </div>
  );
};

export default Filters;

function FilterSkeleton({ title }: { title?: string }) {
  return (
    <div className="flex flex-col items-start gap-2 animate-pulse">
      <label className="text-sm font-medium">{title}</label>
      <div className="h-10 w-[160px] bg-gray-200 rounded" />
    </div>
  );
}
