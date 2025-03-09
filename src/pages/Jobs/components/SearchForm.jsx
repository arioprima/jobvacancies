import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { UilBriefcaseAlt, UilMapMarker } from '@iconscout/react-unicons';

const Control = (props) => {
    return (
        <components.Control {...props}>
            <UilMapMarker color="#82FD6E" className="w-6 h-6" />
            {props.children}
        </components.Control>
    );
};

const SearchForm = ({
    countryOptions,
    onInputClick,
    onSubmit,
    showLocation = true,
    buttonLabel = 'Search'
}) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className="relative w-full">
                    <UilBriefcaseAlt
                        color="#82FD6E"
                        className="absolute left-4 top-[49%] transform -translate-y-1/2 w-5 h-5"
                    />
                    <input
                        type="text"
                        placeholder="Job title, Keyword..."
                        className="border border-green-300 py-[0.55rem] rounded-md focus:outline-green-400 pl-12 pr-4 w-full bg-gray-50"
                        autoComplete="off"
                        onClick={onInputClick}
                    />
                </div>

                {showLocation && (
                    <Select
                        options={countryOptions}
                        placeholder="Select your location"
                        className="w-full"
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
                            indicatorSeparator: (styles) => ({ ...styles, display: 'none' }),
                            dropdownIndicator: (styles) => ({ ...styles, display: 'none' }),
                            option: (styles, { isFocused }) => ({
                                ...styles,
                                backgroundColor: isFocused ? '#F3F4F6' : 'white',
                                color: '#111827',
                                fontSize: '0.875rem',
                                padding: '0.75rem',
                                '&:hover': { backgroundColor: '#F3F4F6' },
                            }),
                        }}
                        components={{ Control }}
                        isClearable
                        isSearchable
                    />
                )}

                <button
                    type="submit"
                    className="py-3 lg:py-0 bg-green-500 text-white px-8 rounded-md text-sm"
                >
                    {buttonLabel}
                </button>
            </div>
        </form>
    );
};

SearchForm.propTypes = {
    countryOptions: PropTypes.array.isRequired,
    onInputClick: PropTypes.func,
    onSubmit: PropTypes.func,
    showLocation: PropTypes.bool,
    buttonLabel: PropTypes.string,
};

Control.propTypes = {
    children: PropTypes.node,
};

export default SearchForm;