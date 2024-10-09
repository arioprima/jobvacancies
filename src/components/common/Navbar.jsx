import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'Find Jobs', link: '/find-job' },
        { name: 'Companies', link: '/companies' },
        { name: 'Expert Class', link: '/expert-class' },
    ];

    return (
        <nav className="navbar navbar-glass text-sm">
            <div className="navbar-start" >
                <a className="navbar-item">Ripple UI</a>
            </div >
            {navItems.map((item, index) => (
                <section key={index}>
                    <Link key={index} className="py-[0.5rem] px-[0.75rem] ease-linear duration-150 hover:capitalize hover:text-green-400 hover:underline text-nowrap" to={item.link}>
                        {item.name}
                    </Link>
                </section>
            ))
            }
            <div className="navbar-end">
                <a className="navbar-item">Home</a>
            </div>


        </nav >
    )
}



export default Navbar;