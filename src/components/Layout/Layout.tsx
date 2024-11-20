import { FC } from "react";
import { Footer } from "../common/footer";
import { Header } from "../common/header";

export const Layout: FC<React.PropsWithChildren> = ({ children }) =>
{
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
