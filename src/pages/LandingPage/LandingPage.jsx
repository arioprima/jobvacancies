import HeroSection from "./components/HeroSection";
import Information from "./components/Information";
import Testimony from "./components/Testimony";
const LandingPage = () => {
    return (
        <div>
            <section className="bg-primary lg:h-screen">
                <HeroSection />
            </section>
            <section>
                <Information />
            </section>
            <section className="pt-12 pb-8">
                <Testimony />
            </section>
        </div>
    );
};


export default LandingPage;