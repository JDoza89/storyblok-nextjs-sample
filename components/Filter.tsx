"use client";

import { useRouter, useSearchParams } from "next/navigation";

const Filter = ({
  title,
  options,
  paramKey,
}: {
  title: string;
  options: { uuid: number; name: string }[];
  paramKey: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newParams = new URLSearchParams(searchParams.toString());
    // Update or append the query param
    newParams.set(paramKey, e.target.value);
    // Push the new URL without refreshing
    router.push(`?${newParams.toString()}`, { scroll: false });
  };
  return (
    <div className="flex flex-col items-start gap-2">
      <label className="text-sm font-medium">{title}</label>
      <select
        className="border rounded p-2 text-sm min-w-[160px]"
        onChange={handleChange}
      >
        {options?.map((option) => (
          <option key={option.name} value={option.uuid}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
