import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import LandingPage from '@pages/LandingPage';

const Layout = () => {
    return (
        <section>
            <header className="sticky top-0 z-50 lg:-z-0">
                <Navbar />
            </header>
            <main>
                <LandingPage />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Layout;
