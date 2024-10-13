import HeroSection from "@components/landingPage/HeroSection";
import PropTypes from 'prop-types';

const LandingPage = ({ index }) => {
    return (
        <div>
            <section className="bg-primary h-screen">
                <HeroSection index={index} />
            </section>
        </div>
    );
};

LandingPage.propTypes = {
    index: PropTypes.bool,
};


export default LandingPage;