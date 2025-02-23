import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { UilBriefcaseAlt, UilMapMarker } from '@iconscout/react-unicons';

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
            <UilMapMarker color="#82FD6E" className=" w-6 h-6" />
            {props.children}
        </components.Control>
    );
};

const Jobs = () => {
    return (
        <div className="flex flex-col pt-16 px-4 lg:pt-8 lg:px-16">
            <form>
                <div className="flex gap-5 ">
                    <div className="relative w-full">
                        <UilBriefcaseAlt
                            color="#82FD6E"
                            className="absolute left-4 top-[49%] transform -translate-y-1/2 w-5 h-5 "
                        />
                        <input
                            type="text"
                            placeholder="Job title, Keyword..."
                            className="border border-green-300 py-[0.55rem] rounded-md focus:outline-green-400 pl-12 pr-4 w-full bg-gray-50"
                            autoComplete="off"
                        />
                    </div>
                    <Select
                        options={countryOptions}
                        placeholder="Select your location"
                        className='w-full'
                        styles={{
                            control: (styles, { isFocused }) => ({
                                ...styles,
                                backgroundColor: '#f9fafb ',
                                borderRadius: '0.375rem',
                                padding: '0.2rem 1rem',
                                color: '#82FD6E',
                                borderColor: isFocused ? '#4ade80' : '#86EFAC',
                                boxShadow: isFocused ? '0 0 0 0.5px #4ade80' : 'none',
                                '&:hover': {
                                    borderColor: isFocused ? '#4ade80' : '#86EFAC',
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
                        isClearable={true}
                        isSearchable={true}
                    />
                    <button
                        type="submit"
                        className="px-auto bg-green-500 text-white px-8  rounded-md text-sm"
                    >
                        Search
                    </button>

                </div>
            </form>

            <div>tesging2</div>
        </div>
    );
};

Control.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Jobs;
