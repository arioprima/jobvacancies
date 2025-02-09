import { useState } from 'react';
import BackgroundImage from '@images/backgroud-image.svg';
import Logo from '@images/logo.svg';
import { LuEyeClosed, LuEye } from 'react-icons/lu';
import { AiOutlineMail } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import { isValidEmail } from '@utils/regex';
import { oauthLoginList } from '@constants/oauthLoginList';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };

    const isFormValid = isValidEmail(email) && password.length > 5;

    return (
        <div className="bg-white -z-20 w-full h-screen flex flex-col items-center justify-center">
            <img
                src={Logo}
                alt="logo"
                className="fixed top-0 w-32 h-32 sm:w-40 sm:h-40 z-20"
            />
            <img
                src={BackgroundImage}
                alt="background"
                className="hidden lg:block fixed top-[80px] left-[75px] w-[80%] h-[150vh] bg-white opacity-70 mt-4"
            />
            <div className="bg-white w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:w-[25%] h-auto z-50 rounded-lg shadow-xl p-8 mt-14 lg:mt-24">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium">Sign In</h1>
                    <p className="text-sm">Sign in to your account</p>
                </div>

                <form className="flex flex-col gap-3 mt-6">
                    <div className="flex flex-col gap-1">
                        <span className="text-md text-slate-800">Email</span>
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md focus:outline-green-300 w-full pr-10"
                                autoComplete="off"
                            />
                            <AiOutlineMail
                                size={20}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-md text-slate-800">Password</span>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md focus:outline-green-300 w-full pr-10"
                                autoComplete="off"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
                            </button>
                        </div>
                    </div>

                    <p className="text-right text-sm">
                        <span className="text-green-500 cursor-pointer">
                            Forgot Password?
                        </span>
                    </p>

                    <button
                        type="submit"
                        className={`my-3 p-2 rounded-md w-full ${isFormValid
                                ? 'bg-green-500 hover:bg-green-600 text-white'
                                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            }`}
                        disabled={!isFormValid}
                    >
                        Sign In
                    </button>
                </form>

                <p className="text-center text-sm">Or Sign in with</p>

                <div className="flex justify-center gap-5 mt-5">
                    {oauthLoginList.map((item, index) => (
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
                    {oauthLoginList.map((_, index) => (
                        <Tooltip
                            key={index}
                            id={`tooltip-${index}`}
                            style={{ backgroundColor: 'rgb(130, 253, 110)', color: 'black' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Login;
