"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DraftModeWrapper = ({
  children,
  enabled,
}: {
  children?: React.ReactNode;
  enabled?: boolean;
}) => {
  const pathname = usePathname();

  return (
    <>
      {enabled ? (
        <>
          <div className="sticky top-0 left-0 z-50 w-full h-16 bg-black border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between h-full px-8">
              <h1 className="text-lg font-bold text-white">Draft Mode</h1>
              <Link
                prefetch={false}
                className="text-white"
                href={`/api/exit-draft?pathname=${pathname}`}
              >
                Exit Preview
              </Link>
            </div>
          </div>
          {children}
        </>
      ) : null}
    </>
  );
};
export default DraftModeWrapper;
