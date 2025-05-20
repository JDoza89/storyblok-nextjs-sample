import { draftMode } from "next/headers";
import Link from "next/link";

const DraftModeWrapper = async ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { isEnabled } = await draftMode();

  return (
    <>
      {isEnabled ? (
        <>
          <div className="sticky top-0 left-0 z-50 w-full h-16 bg-black border-b border-gray-200 shadow-sm">
            <div className="flex items-center justify-between h-full px-8">
              <h1 className="text-lg font-bold text-white">Draft Mode</h1>
              <Link
                prefetch={false}
                className="text-white"
                href="/api/exit-draft"
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
