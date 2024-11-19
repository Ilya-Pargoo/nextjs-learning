import { Footer } from "../common/footer"
import { Header } from "../common/header"

export const Layout = ({ children }: { children: React.ReactNode }) =>
{
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}