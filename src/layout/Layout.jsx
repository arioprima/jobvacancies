import Footer from "@components/common/Footer";
import Navbar from "@components/common/Navbar";
import LandingPage from "@pages/LandingPage";

const Layout = () => {
    return (
        <section>
            <header className="sticky top-0">
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