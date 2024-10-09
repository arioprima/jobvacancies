import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import LandingPage from "@pages/LandingPage";

const Layout = () => {
    return (
        <section>
            <header>
                <Navbar />
            </header>
            <main>
                <LandingPage />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    )
}

export default Layout;