import { IoSearch } from 'react-icons/io5';
import AccordionFilter from './components/AccordionFilter';
import Paginition from '@components/Pagination/Pagination';
import { useState } from 'react';
import FilterOption from './components/FilterOption';
import SearchForm from './components/SearchForm';
import { IoIosOptions } from "react-icons/io";

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
        title: 'Prioritise By',
        options: ['Most Recent', 'Most Relevant', 'Highest Salary', 'Most Popular'],
    },
    {
        id: 1,
        title: 'Job Type',
        options: [
            'Full-time',
            'Contract',
            'Internship',
            'Freelance',
            'Part-time',
            'Daily',
        ],
    },
    {
        id: 2,
        title: 'Work Arrangement Options',
        options: ['Onsite', 'Hybrid', 'Remote/WFH'],
    },
    {
        id: 3,
        title: 'Experience',
        options: [
            'No Cxperience',
            'Fresh Graduate',
            '< 1 Year',
            '1-2 Years',
            '2-3 Years',
            '3-5 Years',
            '5-10 Years',
            '> 10 Years',
        ],
    },
    {
        id: 4,
        title: 'Education Level',
        options: [
            'PhD',
            "Master's Degree",
            "Bachelor's Degree",
            'Diploma',
            'Senior/Vocational High School',
            'Secondary School',
            'Elementary School',
        ],
    },
    {
        id: 5,
        title: 'Last Updated',
        options: ['Past Week', 'Past 24 Hours', 'Any Time', 'Past Month'],
    },
];

const jobs = [
    {
        id: 1,
        title: 'Mobile Developer - IT (Supervisor Development Program)',
        company: 'PT Bintang Toedjoe',
        location: 'Jakarta Timur, Jakarta Raya',
        category: 'Developer/Programmer (Teknologi Informasi & Komunikasi)',
        posted: '1 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 2,
        title: 'Frontend Developer',
        company: 'PT Maju Jaya',
        location: 'Surabaya, Jawa Timur',
        category: 'Developer/Programmer (Web)',
        posted: '2 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 3,
        title: 'Mobile Developer - IT (Supervisor Development Program)',
        company: 'PT Bintang Toedjoe',
        location: 'Jakarta Timur, Jakarta Raya',
        category: 'Developer/Programmer (Teknologi Informasi & Komunikasi)',
        posted: '1 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 4,
        title: 'Frontend Developer',
        company: 'PT Maju Jaya',
        location: 'Surabaya, Jawa Timur',
        category: 'Developer/Programmer (Web)',
        posted: '2 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 5,
        title: 'Mobile Developer - IT (Supervisor Development Program)',
        company: 'PT Bintang Toedjoe',
        location: 'Jakarta Timur, Jakarta Raya',
        category: 'Developer/Programmer (Teknologi Informasi & Komunikasi)',
        posted: '1 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 6,
        title: 'Frontend Developer',
        company: 'PT Maju Jaya',
        location: 'Surabaya, Jawa Timur',
        category: 'Developer/Programmer (Web)',
        posted: '2 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 7,
        title: 'Mobile Developer - IT (Supervisor Development Program)',
        company: 'PT Bintang Toedjoe',
        location: 'Jakarta Timur, Jakarta Raya',
        category: 'Developer/Programmer (Teknologi Informasi & Komunikasi)',
        posted: '1 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
    {
        id: 8,
        title: 'Frontend Developer',
        company: 'PT Maju Jaya',
        location: 'Surabaya, Jawa Timur',
        category: 'Developer/Programmer (Web)',
        posted: '2 hari yang lalu',
        logo: 'https://placehold.co/400',
    },
];

const Jobs = () => {
    const [showModalSelect, setShowModalSelect] = useState(false);
    const [showModalFilter, setShowModalFilter] = useState(false);

    const handleInputClick = () => {
        if (window.innerWidth < 1024) {
            setShowModalSelect(true);
        }
    };

    const handleFilterClick = () => {
        if (window.innerWidth < 1024) {
            setShowModalFilter(true);
        }
    }

    return (
        <div className="flex flex-col pt-6 lg:pt-8 px-4 lg:px-16 gap-10 pb-16">
            <div className="lg:hidden flex flex-col gap-4">
                <div className="relative w-full">
                    <IoSearch
                        color="#82FD6E"
                        className="absolute left-4 top-[49%] transform -translate-y-1/2 w-5 h-5 "
                    />
                    <input
                        type="text"
                        value="Jobs In All Cities/Provinces"
                        readOnly
                        className="border border-green-300 py-[0.55rem] rounded-md focus:outline-green-400 pl-12 pr-4 w-full bg-gray-50"
                        autoComplete="off"
                        onClick={handleInputClick}
                    />
                </div>
                <div className="relative w-full">
                    <IoIosOptions
                        color="#000000"
                        className="absolute left-[42%] top-[49%] transform -translate-y-1/2 w-5 h-5 "
                    />
                    <div
                        className="border border-green-300 py-1 rounded-lg focus:outline-green-400 pl-[50%] pr-4 w-full bg-gray-50"
                        onClick={handleFilterClick}
                    >
                        Filter
                    </div>

                </div>
            </div>
            <div className="hidden lg:block">
                <SearchForm
                    countryOptions={countryOptions}
                    onInputClick={handleInputClick}
                    onSubmit={() => { }}
                    showLocation={true}
                    buttonLabel="Search"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="hidden lg:block border-2 rounded-lg md:col-span-4">
                    <div className="hidden lg:block md:col-span-3 overflow-y-scroll max-h-screen ">
                        {filters.map((filter) => (
                            <AccordionFilter
                                key={filter.id}
                                title={filter.title}
                                options={filter.options}
                            />
                        ))}
                    </div>
                </div>
                <div className="md:col-span-8 rounded-lg grid lg:grid-cols-2 grid-cols-1 gap-10 max-h-screen overflow-y-scroll">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="flex flex-col gap-4 border-4 border-[#E6E8EB] rounded-lg p-4 justify-center"
                        >
                            <img src={job.logo} alt={job.title} className="w-20 h-20" />
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <h3 className="text-lg font-semibold h-14">{job.title}</h3>
                                    <p className="text-lg">{job.company}</p>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm text-gray-500">{job.location}</p>
                                    <p className="text-sm text-gray-500">{job.category}</p>
                                    <p className="text-sm text-gray-500">{job.posted}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="w-full col-span-full">
                        <Paginition
                            currentPage={1}
                            totalPages={10}
                            onPageChange={() => { }}
                        />
                    </div>
                </div>
            </div>
            {showModalSelect && (
                <FilterOption title={"Edit Your Search"} onClose={() => setShowModalSelect(false)}>
                    <SearchForm
                        countryOptions={countryOptions}
                        onInputClick={() => { }}
                        onSubmit={() => { }}
                        showLocation={true}
                        buttonLabel="Search"
                    />
                </FilterOption>
            )}

            {showModalFilter && (
                <>
                    <FilterOption title={"Filter Your Search"} onClose={() => setShowModalFilter(false)}>
                        {filters.map((filter) => (
                            <AccordionFilter
                                key={filter.id}
                                title={filter.title}
                                options={filter.options}
                            />
                        ))}
                        <button
                            className="fixed bottom-4 w-[92%] bg-green-500 text-white rounded-lg py-2 px-2"
                        >
                            Refine Jobs
                        </button>
                    </FilterOption>
                </>
            )}
        </div>
    );
};
export default Jobs;
