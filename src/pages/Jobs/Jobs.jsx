import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { UilBriefcaseAlt, UilMapMarker } from '@iconscout/react-unicons';
import AccordionFilter from './components/AccordionFilter';

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

const filters = [
    {
        id: 0,
        title: "Prioritise By",
        options: ["Most Recent", "Most Relevant", "Highest Salary", "Most Popular"]
    },
    {
        id: 1,
        title: "Job Type",
        options: ["Full-time", "Contract", "Internship", "Freelance", "Part-time", "Daily"]
    },
    {
        id: 2,
        title: "Work Arrangement Options",
        options: ["Onsite", "Hybrid", "Remote/WFH"]
    },
    {
        id: 3,
        title: "Experience",
        options: ["No Cxperience", "Fresh Graduate", "< 1 Year", "1-2 Years", "2-3 Years", "3-5 Years", "5-10 Years", "> 10 Years"]
    },
    {
        id: 4,
        title: "Education Level",
        options: ["PhD", "Master's Degree", "Bachelor's Degree", "Diploma", "Senior/Vocational High School", "Secondary School", "Elementary School"]
    },
    {
        id: 5,
        title: "Last Updated",
        options: ["Past Week", "Past 24 Hours", "Any Time", "Past Month"]
    }
];

const jobs = [
    {
        id: 1,
        title: "Mobile Developer - IT (Supervisor Development Program)",
        company: "PT Bintang Toedjoe",
        location: "Jakarta Timur, Jakarta Raya",
        category: "Developer/Programmer (Teknologi Informasi & Komunikasi)",
        posted: "1 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "PT Maju Jaya",
        location: "Surabaya, Jawa Timur",
        category: "Developer/Programmer (Web)",
        posted: "2 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 3,
        title: "Mobile Developer - IT (Supervisor Development Program)",
        company: "PT Bintang Toedjoe",
        location: "Jakarta Timur, Jakarta Raya",
        category: "Developer/Programmer (Teknologi Informasi & Komunikasi)",
        posted: "1 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 4,
        title: "Frontend Developer",
        company: "PT Maju Jaya",
        location: "Surabaya, Jawa Timur",
        category: "Developer/Programmer (Web)",
        posted: "2 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 5,
        title: "Mobile Developer - IT (Supervisor Development Program)",
        company: "PT Bintang Toedjoe",
        location: "Jakarta Timur, Jakarta Raya",
        category: "Developer/Programmer (Teknologi Informasi & Komunikasi)",
        posted: "1 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 6,
        title: "Frontend Developer",
        company: "PT Maju Jaya",
        location: "Surabaya, Jawa Timur",
        category: "Developer/Programmer (Web)",
        posted: "2 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 7,
        title: "Mobile Developer - IT (Supervisor Development Program)",
        company: "PT Bintang Toedjoe",
        location: "Jakarta Timur, Jakarta Raya",
        category: "Developer/Programmer (Teknologi Informasi & Komunikasi)",
        posted: "1 hari yang lalu",
        logo: "https://placehold.co/400"
    },
    {
        id: 8,
        title: "Frontend Developer",
        company: "PT Maju Jaya",
        location: "Surabaya, Jawa Timur",
        category: "Developer/Programmer (Web)",
        posted: "2 hari yang lalu",
        logo: "https://placehold.co/400"
    }
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
        <div className="flex flex-col pt-16 px-4 lg:pt-8 lg:px-16 gap-10 pb-16">
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

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="border-2 rounded-lg md:col-span-4">
                    <div className=" md:col-span-3 overflow-y-scroll max-h-[80vh]">
                        {filters.map((filter) => (
                            <AccordionFilter key={filter.id} title={filter.title} options={filter.options} />
                        ))}
                    </div>

                </div>
                <div className="md:col-span-8  rounded-lg grid grid-cols-2 gap-10 h-[80vh] overflow-y-scroll">
                    {jobs.map((job) => (
                        <div key={job.id} className="flex flex-col gap-4 border-4 border-[#E6E8EB] rounded-lg p-4 justify-center">
                            <img src={job.logo} alt={job.title} className="w-20 h-20" />
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-col'>
                                    <h3 className="text-lg font-semibold h-14">{job.title}</h3>
                                    <p className="text-lg">{job.company}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{job.location}</p>
                                    <p className="text-sm text-gray-500">{job.category}</p>
                                    <p className="text-sm text-gray-500">{job.posted}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

Control.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Jobs;
