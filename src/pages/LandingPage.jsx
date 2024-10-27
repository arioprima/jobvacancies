import HeroSection from "@components/HeroSection/HeroSection";

const LandingPage = () => {
    return (
        <div>
            <section className="bg-primary lg:h-screen">
                <HeroSection />
            </section>
            <section className="">
                <HeroSection />
            </section>
        </div>
    );
};


export default LandingPage;