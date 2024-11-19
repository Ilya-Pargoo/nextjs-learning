import Link from "next/link";
import { FC } from "react";

export const FacebookIcon: FC<{ link: string }> = ({ link }) =>
{
    return (
        <Link href={link} className="group flex items-center" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-subtext group-hover:fill-text transition-all duration-300 w-[40px] md:w-[24px]">
                <path fillRule="evenodd" clip-rule="evenodd" d="M0 9.05025C0 13.5248 3.24975 17.2455 7.5 18V11.4998H5.25V9H7.5V6.99975C7.5 4.74975 8.94975 3.50025 11.0002 3.50025C11.6497 3.50025 12.3503 3.6 12.9998 3.69975V6H11.85C10.7498 6 10.5 6.54975 10.5 7.25025V9H12.9L12.5002 11.4998H10.5V18C14.7502 17.2455 18 13.5255 18 9.05025C18 4.0725 13.95 0 9 0C4.05 0 0 4.0725 0 9.05025Z" />
            </svg>
        </Link>
    )
}