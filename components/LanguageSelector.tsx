"use client";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "next-i18n-router/client";
import i18nConfig from "@/i18nConfig";
import { setCookieAction } from "@/actions";

const LanguageSelector = () => {
  const currentPathname = usePathname();
  const currentLocale = useCurrentLocale(i18nConfig);

  return (
    <>
      {i18nConfig.locales.map((loc) => (
        <span
          key={loc}
          onClick={() =>
            setCookieAction(
              "NEXT_LOCALE",
              loc,
              currentPathname.replace(`/${currentLocale}`, `/${loc}`)
            )
          }
          className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer ${
            loc === loc ? "bg-black text-white" : ""
          }`}
        >
          {loc}
        </span>
      ))}
    </>
  );
};
export default LanguageSelector;
