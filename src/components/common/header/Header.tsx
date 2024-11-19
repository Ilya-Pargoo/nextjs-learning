import Link from "next/link"
import { FC, useCallback, useState } from "react"
import { MainLogoIcon } from "../icons/MainLogoIcon"
import { navItems } from "./constants"
import { BurgerMenuButton } from "../buttons/BurgerMenuButton"
import { NavList } from "../menus/NavList"

export const Header: FC = () =>
{
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = useCallback(() => { setMobileMenuOpen((prev) => !prev); }, []);

    return (
        <header className="shadow-custom-header content-center sticky top-0 z-50">
            <div className="container h-full flex items-center justify-between  min-h-[60px]">
                <Link href="/">
                    <MainLogoIcon />
                </Link>
                <NavList
                    navClass={"hidden md:block"}
                    navItemListClass={"flex space-x-6"}
                    navItemClass={"header-link"}
                    currentLinkClass="active"
                    navItems={navItems}
                />
                <BurgerMenuButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
            </div>
            {isMobileMenuOpen &&
                <NavList
                    navClass={"md:hidden bg-white shadow-md"}
                    navItemListClass={"space-y-4  px-4 py-6"}
                    navItemClass={"header-link"}
                    navItems={navItems}
                    currentLinkClass="active-mobile"
                />
            }
        </header>
    )
}