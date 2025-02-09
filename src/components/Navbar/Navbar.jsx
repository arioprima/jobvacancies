import { Link, useNavigate } from 'react-router-dom';
import Logo from '@images/logo.svg';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import Button from '@components/common/Button';
import Login from '@components/Login/Login';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Find Jobs', link: '/find-job' },
        { name: 'Companies', link: '/companies' },
        { name: 'Expert Class', link: '/expert-class' },
    ];

    return (
        <>
            <nav className="flex justify-between items-center p-3 lg:py-3 bg-white lg:px-16 lg:navbar-glass lg:text-sm">
                <div className="lg:w-[75%]">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="h-[2.7rem]" />
                    </Link>
                </div>
                {navItems.map((item, index) => (
                    <section
                        key={index}
                        className={`${isMenuOpen ? 'hidden' : 'lg:flex lg:justify-center hidden'}`}
                    >
                        <Link
                            key={index}
                            className=" py-[0.5rem] px-4 ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap"
                            to={item.link}
                        >
                            {item.name}
                        </Link>
                    </section>
                ))}
                <div
                    className={`${isMenuOpen ? 'hidden' : 'lg:flex items-center gap-5 lg:justify-end lg:w-full hidden'}`}
                >
                    <p className="py-[0.5rem] ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap hover:cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Login
                    </p>
                    <Button className="btn btn-success btn-sm px-4 hover:scale-105 hover:bg-green-400" onClick={() => navigate('/register')}>
                        Sign Up
                    </Button>
                    <div className="flex gap-3 items-center hover:text-green-400">
                        <p className="py-[0.5rem] ease-linear duration-150 hover:capitalize hover:underline text-nowrap hover:cursor-pointer">
                            For Employers
                        </p>
                        <FaArrowRight className="hover:text-green-400" />
                    </div>
                </div>
                <div className="cursor-pointer lg:hidden">
                    <button className={`lg:hidden `} onClick={toggleMenu}>
                        <span
                            className={
                                isMenuOpen
                                    ? 'hamburger-active'
                                    : 'hamburger-line origin-top-left'
                            }
                        ></span>
                        <span
                            className={isMenuOpen ? 'hamburger-active' : 'hamburger-line'}
                        ></span>
                        <span
                            className={
                                isMenuOpen
                                    ? 'hamburger-active '
                                    : 'hamburger-line origin-bottom-left'
                            }
                        ></span>
                    </button>
                </div>
            </nav>
            <div
                className={`${isMenuOpen
                    ? 'absolute bg-primary  w-full opacity-100 transform scale-y-100 transition-all duration-1000 ease-in-out origin-top shadow-sm shadow-slate-600 lg:hidden'
                    : 'absolute w-full opacity-0 transform scale-y-0 h-64 transition-all duration-1000 ease-in-out origin-top shadow-sm shadow-slate-700 lg:hidden'
                    }`}
            >
                {isMenuOpen ? (
                    <div className="flex flex-col text-md gap-2 items-start ">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                className="py-[0.5rem] px-4 ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap"
                                to={item.link}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="px-[1.1rem] flex flex-col gap-5 mt-2">
                            <Link to="/login" className="ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap hover:cursor-pointer">
                                Login
                            </Link>
                            <Button className="btn btn-success btn-sm px-4 hover:scale-105 hover:bg-green-400" onClick={
                                () => navigate
                            }>
                                Sign Up
                            </Button>
                            <div className="flex flex-row items-start gap-2 hover:text-green-400 ">
                                <p className="ease-linear duration-150 hover:capitalize hover:underline text-nowrap hover:cursor-pointer">
                                    For Employers
                                </p>
                                <FaArrowRight className="hover:text-green-400 mt-1 mb-4" />
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
