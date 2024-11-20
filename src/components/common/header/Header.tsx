import { FC, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { NAV_ITEMS } from "./constants";
import MainLogoIcon from "@/../public/icons/logo.svg";
import { BurgerMenuButton } from "../buttons/burger-menu-button";

export const Header: FC = () =>
{
  const router = useRouter();
  const currentPath = router.pathname;

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => { setMobileMenuOpen((prev) => !prev); };

  return (
    <header className="shadow-header content-center sticky top-0 z-50">
      <div className="container flex items-center justify-between min-h-15">
        <Link href="/">
          <MainLogoIcon width={"129px"} height={'28px'} />
        </Link>
        <nav className={classNames("hidden", "md:block")}>
          <ul className={"flex space-x-6"}>
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.url}
                  className={classNames(
                    "header-link block py-5 relative font-semibold text-subtext transition-colors duration-200 ease-in",
                    "focus-visible:outline focus-visible:outline-main hover:text-text",
                    { "header-link-active text-text": currentPath === item.url }
                  )}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav >
        <BurgerMenuButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      </div>
      {!!isMobileMenuOpen &&
        <nav className={classNames("bg-white shadow-md", "md:hidden")}>
          <ul className={"space-y-4  px-4 py-6"}>
            {NAV_ITEMS.map((item, index) => (
              <li key={index}>
                <Link href={item.url}
                  className={classNames(
                    "header-link block py-1.3 relative font-semibold text-subtext transition-colors duration-200 ease-in",
                    "focus-visible:outline focus-visible:outline-main hover:text-text",
                    { "header-link-mob-active text-text": currentPath === item.url }
                  )}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav >
      }
    </header>
  )
}