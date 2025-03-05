import PropTypes from 'prop-types';
import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const AccordionFilter = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="border-b border-gray-300">
            <button
                className="w-full text-left p-4 flex justify-between font-medium"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span>{isOpen ? <IoChevronUp size={22} /> : <IoChevronDown size={22} />}</span>
            </button>
            {isOpen && (
                <div className="px-4 pb-4">
                    <ul className="space-y-2">
                        {options.map((option, index) => (
                            <li key={index} className="text-gray-700">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 accent-[#03a903] hover:cursor-pointer"
                                    />
                                    <span>{option}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

            )}
        </div>
    );
}

AccordionFilter.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AccordionFilter
