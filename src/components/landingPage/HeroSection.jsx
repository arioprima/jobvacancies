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
        <div className="flex flex-col pt-16 px-4">
            <div>
                <div className="flex flex-col gap-2 text-4xl font-semibold text-slate-700">
                    <p>Find a job that suits</p>
                    <p>your interest & skills.</p>
                </div>
                <div className="mt-8 text-lg w-[90%] break-words text-justify text-slate-500">
                    <p>
                        Find the ideal job for you by exploring the various job openings available
                        about the company understanding the work culture.
                    </p>
                </div >
                <form>
                    <div className="flex flex-col w-full gap-4 mt-10">
                        <div className="relative">
                            <UilBriefcaseAlt color="#82FD6E" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" />
                            <input type="text" placeholder="Job title, Keyword..." className="w-full pl-12 py-5 text-sm bg-[#FFFFFF] focus:outline-none ring-transparent rounded-lg" />
                        </div>
                        <div className="relative">
                            <Select
                                options={countryOptions}
                                placeholder="Select your location"
                                styles={
                                    {
                                        control: (styles) => ({
                                            ...styles,
                                            backgroundColor: 'white',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            padding: '0.85rem 1rem',
                                            fontSize: '0.875rem',
                                            boxShadow: '0 0 0 1px #D1D5DB',
                                            '&:hover': {
                                                borderColor: '#D1D5DB',
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
                                    }
                                }
                                components={{ Control }}
                                isSearchable={true}
                                maxMenuHeight={150}
                            />
                        </div>
                        <button className="btn btn-success w-full py-6 text-lg hover:bg-green-400">Search Jobs</button>
                    </div>
                </form>
                <div className="mt-4 text-sm text-slate-500">
                    <p>
                        <strong>Suggestion:</strong> Designer, Programming, Digital Marketing, Video, Amimation, etc.
                    </p>
                </div >
            </div>
            <div >
                <img src={Illustration} alt="hero" className="w-full  my-12" />
            </div>
        </div >
    );
};

export default HeroSection;
