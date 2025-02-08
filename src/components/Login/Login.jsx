import { isValidEmail } from '@utils/regex';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { LuEyeClosed, LuEye } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import GoogleIcons from "@icons/google-icon.svg";
import LinkedIcons from "@icons/icons8-linkedin.svg";
import GithubIcons from "@icons/github-icon.svg";
import { Tooltip } from 'react-tooltip';
import { RxCross2 } from "react-icons/rx";

const Login = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const OauthLogin = [
        {
            name: 'Google',
            icon: GoogleIcons,
            tooltip: 'Sign in with Google',
        },
        {
            name: 'Linkedin',
            icon: LinkedIcons,
            tooltip: 'Sign in with Linkedin',
        },
        {
            name: 'Github',
            icon: GithubIcons,
            tooltip: 'Sign in with Github',
        },
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const isFormValid = isValidEmail(email) && password.length > 5;


    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="absolute inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>

            <div className="bg-white w-[25%] h-[65%] z-10 rounded-lg shadow-xl p-8 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    <RxCross2 size={30} />
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium">Sign In</h1>
                    <p className="text-sm">Sign-in to your account</p>
                </div>
                <form
                    action=""
                    className="flex flex-col gap-3 mt-6"
                >
                    <div className="flex flex-col gap-1 relative">
                        <span className="text-md text-slate-800">Email</span>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md focus:outline-green-300 w-full pr-10"
                                autoComplete='off'
                                autoFocus
                            />
                            <AiOutlineMail size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 relative">
                        <span className="text-md text-slate-800">Password</span>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md focus:outline-green-300 w-full pr-10"
                                autoComplete='off'
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
                            </button>
                        </div>
                    </div>
                    <p className="text-right text-sm">
                        <span className="text-green-500 cursor-pointer">Forgot Password?</span>
                    </p>
                    <button
                        type="submit"
                        className={`my-3 p-2 rounded-md ${isFormValid ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                            }`}
                        disabled={!isFormValid}
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center  text-sm">
                    Or Sign in with
                </p>
                <div className="flex justify-center gap-10 mt-5">
                    {OauthLogin.map((item, index) => (
                        <button
                            key={index}
                            className="transition duration-300 hover:brightness-150 hover:drop-shadow-lg"
                            data-tooltip-id={`tooltip-${index}`}
                            data-tooltip-content={item.tooltip}
                        >
                            <img
                                src={item.icon}
                                alt={`${item.name} Icon`}
                                className="w-9 h-9"
                            />
                        </button>
                    ))}
                    {OauthLogin.map((_, index) => (
                        <Tooltip
                            key={index} id={`tooltip-${index}`}
                            style={{ backgroundColor: "rgb(130, 253, 110)", color: "black" }}
                        />
                    ))}
                </div>
            </div>
        </div >
    );
};

Login.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Login;
