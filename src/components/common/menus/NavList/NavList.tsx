import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react"
import { NavListProps } from "./types";

export const NavList: FC<NavListProps> = (props) =>
{
    const router = useRouter();
    const currentPath = router.pathname;
    const { navItems, navItemClass, navItemListClass, navClass, currentLinkClass = "" } = props;

    return (
        <nav className={navClass}>
            <ul className={navItemListClass}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.url}
                            className={`${navItemClass} ${currentPath === item.url ? currentLinkClass : ''}`}>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav >
    )
}