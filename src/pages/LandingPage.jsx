import HeroSection from "@components/HeroSection/HeroSection";
import Information from "@components/Information/Information";

const LandingPage = () => {
    return (
        <div>
            <section className="bg-primary lg:h-screen">
                <HeroSection />
            </section>
            <section>
                <Information />
            </section>
        </div>
    );
};


export default LandingPage;