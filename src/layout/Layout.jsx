import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import LandingPage from "@pages/LandingPage";
import { useState } from "react";

const Layout = () => {
    const [index, setIndex] = useState(false)
    const onMenu = () => {
        setIndex(!index)
    }

    return (
        <section>
            <header className="sticky top-0">
                <Navbar showMenu={{ onMenu }} />
            </header>
            <main>
                <LandingPage index={index} />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Layout;