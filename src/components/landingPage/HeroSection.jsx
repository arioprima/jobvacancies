import { UilBriefcaseAlt, UilMapMarker } from '@iconscout/react-unicons'
import Select, { components } from 'react-select';
import Illustration from '@images/Illustration.svg';
import PropTypes from 'prop-types';


const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'id', label: 'Indonesia' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
];

const Control = (props) => {
    return (
        <components.Control {...props}>
            <UilMapMarker color="#82FD6E" className="w-6 h-6" />
            {props.children}
        </components.Control>
    );
};

Control.propTypes = {
    children: PropTypes.node.isRequired,
};

const HeroSection = () => {
    return (
        <div className="flex flex-col pt-16 px-4 lg:flex-row lg:pt-5 lg:px-16">
            <div className='lg:flex-[55%] lg:pt-20'>
                <div className="flex flex-col gap-2 text-4xl font-semibold text-slate-700 lg:font-normal">
                    <p>Find a job that suits</p>
                    <p>your interest & skills.</p>
                </div>
                <div className="mt-8 text-lg w-[90%] break-words text-justify text-slate-500 lg:text-base lg:mt-4">
                    <p>
                        Find the ideal job for you by exploring the various job openings available
                        about the company understanding the work culture.
                    </p>
                </div >
                <form>
                    <div className="flex flex-col w-full gap-4 mt-10 lg:bg-white lg:flex-row lg:items-center lg:justify-between lg:mt-5 lg:pr-4 lg:py-2 lg:rounded-md ">
                        <div className="relative">
                            <UilBriefcaseAlt color="#82FD6E" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5  lg:top-[48%]" />
                            <input type="text" placeholder="Job title, Keyword..." className="w-full pl-12 py-5 text-sm bg-[#FFFFFF] focus:outline-none ring-transparent rounded-lg lg:py-[0.65rem] lg:px-12" />
                        </div>
                        <div className="relative lg:border-l-2 lg:border-slate-200">
                            <Select
                                options={countryOptions}
                                placeholder="Select your location"
                                styles={{
                                    control: (styles, { isFocused }) => ({
                                        ...styles,
                                        backgroundColor: 'white',
                                        border: 'none',
                                        borderRadius: '0.5rem',
                                        padding: '0.85rem 1rem',
                                        fontSize: '0.875rem',
                                        boxShadow: isFocused ? 'none' : styles.boxShadow,
                                        borderColor: isFocused ? 'transparent' : styles.borderColor,
                                        '@media (min-width: 1024px)': {
                                            padding: '0.25rem 2rem',
                                            fontSize: '0.8rem',
                                        },
                                    }),
                                    indicatorSeparator: (styles) => ({
                                        ...styles,
                                        display: 'none',
                                    }),
                                    dropdownIndicator: (styles) => ({
                                        ...styles,
                                        display: 'none',
                                    }),
                                    option: (styles, { isFocused }) => ({
                                        ...styles,
                                        backgroundColor: isFocused ? '#F3F4F6' : 'white',
                                        color: '#111827',
                                        fontSize: '0.875rem',
                                        padding: '0.75rem',
                                        '&:hover': {
                                            backgroundColor: '#F3F4F6',
                                        },
                                    }),
                                }}
                                components={{ Control }}
                                isSearchable={true}
                                maxMenuHeight={150}
                            />

                        </div>
                        <button className="btn btn-success w-full py-6 text-lg hover:bg-green-400 lg:text-[0.75rem] lg:text-nowrap lg:py-4 lg:w-[15%] lg:rounded-md">Find Jobs</button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-slate-500">
                    <p>
                        <strong>Suggestion:</strong> Designer, Programming, Digital Marketing, Video, Amimation, etc.
                    </p>
                </div >
            </div>
            <div className='lg:flex lg:justify-end items-start lg:flex-[45%]' >
                <img src={Illustration} alt="hero" className="w-full my-12 lg:w-[80%] text-end lg:my-0" />
            </div>
        </div >
    );
};

export default HeroSection;
