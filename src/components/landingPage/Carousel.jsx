import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({ companies }) => {
    const settings = {
        lazyLoad: true,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        arrows: false,
        draggable: true,
    };

    return (
        <div className='w-full m-auto" lg:hidden'>
            <Slider {...settings}>
                {companies.map((item) => (
                    <div key={item.name} className="flex flex-col pt-4 hover:text-green-400 text-lg hover:text-xl">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-16 h-16 mx-auto object-cover rounded-full transition-transform duration-300 ease-in-out hover:shadow-md hover:shadow-green-400 hover:scale-105"
                            />
                            <h3 className="mt-4 text-center font-medium">{item.name}</h3>
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

Carousel.propTypes = {
    companies: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Carousel;