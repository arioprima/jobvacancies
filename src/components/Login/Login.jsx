import { isValidEmail } from '@utils/regex';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { LuEyeClosed, LuEye } from "react-icons/lu";


const Login = ({ isOpen, onClose }) => {
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

    const isFormValid = isValidEmail(email) && password.length > 0;


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
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                    ✖
                </button>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-medium">Sign In</h1>
                    <p className="text-sm">Sign in to access your account</p>
                </div>
                <form
                    action=""
                    className="flex flex-col gap-3 mt-6"
                >
                    <div className='flex flex-col gap-2'>
                        <span className="text-md text-slate-800">Email</span>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded-md focus:outline-green-300"
                        />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <span className="text-md text-slate-800">Password</span>
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                                className="border border-gray-300 p-2 rounded-md focus:outline-green-300 w-full pr-10"
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

                    <button
                        type="submit"
                        className={`p-2 rounded-md ${isFormValid ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                            }`}
                        disabled={!isFormValid}
                    >
                        Sign In
                    </button>
                </form>

            </div>
        </div>
    );
};

Login.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Login;
