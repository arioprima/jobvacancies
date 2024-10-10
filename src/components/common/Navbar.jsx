import { Link } from "react-router-dom";
import Logo from "@images/logo.svg";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Find Jobs', link: '/find-job' },
        { name: 'Companies', link: '/companies' },
        { name: 'Expert Class', link: '/expert-class' },
    ];

    return (
        <nav className="lg:navbar lg:navbar-glass lg:px-16 lg:text-sm">
            <div className="lg:justify-start lg:w-[75%] " >
                <Link to="/">
                    <img src={Logo} alt="logo" className="h-[2.7rem]" />
                </Link>
            </div >
            {navItems.map((item, index) => (
                <section key={index} className="lg:w-ful lg:flex lg:justify-center">
                    <Link key={index} className=" py-[0.5rem] px-4 ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap" to={item.link}>
                        {item.name}
                    </Link>
                </section>
            ))
            }
            <div className="flex items-center gap-5 lg:justify-end lg:w-full ">
                <p className="py-[0.5rem] ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap hover:cursor-pointer">Login</p>
                <button className="btn btn-success btn-sm px-4 hover:scale-105 hover:bg-green-400">Sign Up</button>
                <div className="flex gap-3 items-center ">
                    <p className="py-[0.5rem] ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap hover:cursor-pointer">For Employers</p>
                    <FaArrowRight />
                </div>
            </div>


        </nav >
    )
}



export default Navbar;