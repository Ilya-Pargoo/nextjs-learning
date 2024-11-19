import { FC } from "react";
import { NavList } from "../menus/NavList";
import { navItems } from "./constants";
import { TwitterIcon } from "../icons/TwitterIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { InstagramIcon } from "../icons/InstagramIcon";

export const Footer: FC = () =>
{
    return (
        <footer className="bg-white">
            <div className="container py-5 border-t" style={{ borderTop: '1px solid var(--separator)' }}>
                <div className="flex flex-col gap-y-8 text-center md:flex-row md:justify-between md:items-center md:space-y-0 md:text-left">
                    <p className="footer-link pointer-events-none order-1 md:order-none">© 2024 Best News</p>
                    <NavList
                        navClass={""}
                        navItemListClass={"flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-8 justify-center"}
                        navItemClass={"footer-link"}
                        navItems={navItems}
                    />
                    <div className="flex justify-center space-x-8 md:space-x-4">
                        <TwitterIcon link={"https://twitter.com"} />
                        <FacebookIcon link={"https://facebook.com"} />
                        <InstagramIcon link={"https://instagram.com"} />
                    </div>
                </div>
            </div>
        </footer>
    );
};
