import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 lg:z-10">
                <Navbar />
            </header>
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-primary">
                <Footer />
            </footer>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
