import { useNavigate } from "react-router-dom";
import Logo from "@images/logo.svg";
import NotFoundImage from "@images/not-found.svg";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
            <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                <div className="w-full md:w-1/2">
                    <div className="mb-10 lg:mb-20">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="mx-auto lg:mx-0 w-36"
                        />
                    </div>
                    <div className="mb-10 md:mb-20 text-gray-600 font-light">
                        <h1 className="font-black uppercase text-3xl lg:text-5xl text-[#82FD6E] mb-10">
                            You seem to be lost!
                        </h1>
                        <p>The page you&apos;re looking for isn&apos;t available.</p>
                        <p>Try searching again or use the Go Back button below.</p>
                    </div>
                    <div className="mb-20 md:mb-0">
                        <button
                            className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-green-500 hover:text-green-600"
                            onClick={() => navigate(-1)}
                        >
                            <i className="mdi mdi-arrow-left mr-2"></i>Go Back
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <img
                        src={NotFoundImage}
                        alt="Error 404"
                        className="mx-auto w-80 lg:w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
