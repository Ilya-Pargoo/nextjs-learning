import { NavItem } from "../../header/types";

export interface NavListProps
{
    navItems: NavItem[];
    navItemClass: string;
    navItemListClass: string;
    navClass: string;
    currentLinkClass?: string;
}