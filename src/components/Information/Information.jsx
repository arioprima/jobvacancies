import PropTypes from 'prop-types';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '@constants/category';
import Select, { components } from 'react-select';
import More from '@icons/dots.svg'
import More_hover from '@icons/dots-hover.svg'
import { useAppContext } from '../../contexts/useAppContext';

const Control = (props) => {
    const { hoveredIndex } = useAppContext();
    console.log(hoveredIndex, 'hoveredIndex');
    return (
        <components.Control
            {...props}
            className={`flex gap-[0.4rem] transition-colors duration-300`}
        >
            <div className={`${hoveredIndex === 5 ? 'bg-slate-500' : 'bg-white'} rounded-full p-3 flex items-center justify-center`}>
                <img
                    src={hoveredIndex === 5 ? More : More_hover}
                    alt="More"
                    className="w-6 h-6 transition-transform duration-300 ease-in-out lg:h-5 lg:w-5"
                />
            </div>
            {props.children}
        </components.Control>
    );
};

const CustomOption = (props) => {
    const { data, isFocused } = props;

    return (
        <components.Option {...props}>
            <div className="flex items-center">
                <img
                    src={isFocused ? data.icon : data.icon_hover}
                    alt={data.label}
                    className="mr-2 w-6 h-6 lg:w-5 lg:h-5"
                />
                <span className={`${isFocused ? 'text-slate-900' : 'text-slate-700'}`}>{data.label}</span>
            </div>
        </components.Option>
    );
};



const Information = () => {
    const { hoveredIndex, setHoveredIndex, menuPlacement, setMenuPlacement } = useAppContext();
    const selectWrapperRef = useRef(null);
    const steps = useMemo(() => [
        {
            icon: 'https://via.placeholder.com/40',
            title: 'Register an account',
            description: 'Create your account to unlock access to thousands of job opportunities tailored to your skills and interests.',
            image: 'https://placehold.co/400',
        },
        {
            icon: 'https://via.placeholder.com/40',
            title: 'Find your job',
            description: 'Discover the perfect job that matches your skills, interests, and location with our advanced search tools.',
            image: 'https://placehold.co/500',
        },
        {
            icon: 'https://via.placeholder.com/40',
            title: 'Apply for job',
            description: 'Apply to your dream job in just a few clicks and wait for responses from employers.',
            image: 'https://placehold.co/600',
        }
    ], []);
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);

    const [lineHeights, setLineHeights] = useState([]);


    useEffect(() => {
        if (stepRefs.current.length) {
            const heights = stepRefs.current.map((el, index) => {
                if (index === steps.length - 1) return 0;
                return el ? el.clientHeight : 0;
            });
            setLineHeights(heights);
        }
    }, [steps]);

    const handleMenuOpen = () => {
        const selectRect = selectWrapperRef.current.getBoundingClientRect();
        const spaceAbove = selectRect.top;
        const spaceBelow = window.innerHeight - selectRect.bottom;
        if (spaceAbove > spaceBelow) {
            setMenuPlacement('top');
        } else {
            setMenuPlacement('bottom');
        }
    };
    return (
        <>
            <div className="py-8 flex flex-col gap-7 lg:py-16 lg:px-16">
                <div className='flex flex-col gap-4'>
                    <div className="inline-flex justify-center text-xl  w-full break-words text-justify px-2 text-slate-700 font-bold lg:font-bold lg:text-2xl ">
                        <p>
                            Browse Job By Categories
                        </p>
                    </div>
                    <div className='inline-flex justify-center text-md w-full break-words text-center px-2 text-slate-700 lg:text-md lg:mt-1 lg:mb-5'>
                        <p>
                            Post a job to tell us about your project. We&apos;ll quickly match you with the right freelancers.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:justify-between'>
                    {categories.map((category, index) => (
                        index < 5 ? (
                            <Link
                                key={index}
                                to={`${category?.navigate}`}
                                className={`flex px-3 py-2 rounded-[32px] mx-2 gap-4 text-lg lg:text-base lg:pr-9 items-center transition-colors duration-300 ease-in-out ${hoveredIndex === index ? 'bg-slate-300 shadow-md shadow-green-200 text-slate-900' : 'bg-primary text-slate-700'}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`${hoveredIndex === index ? 'bg-slate-500 ' : 'bg-white '}rounded-full p-2 flex items-center justify-center`}>
                                    <img
                                        src={hoveredIndex === index ? category.img : category.img_hover}
                                        alt={category.name}
                                        className="w-8 h-8 transition-transform duration-300 ease-in-out lg:w-6 lg:h-6"
                                    />
                                </div>
                                <h3 className="font-medium">{category.name}</h3>
                            </Link>
                        ) : index === 5 ? (
                            <div
                                className={`flex px-3 py-2 rounded-[32px] mx-2 gap-4 text-lg transition-colors duration-300 ease-in-out lg:text-base bg-primary text-slate-700 hover:bg-slate-300 hover:shadow-md hover:shadow-green-200 hover:text-slate-900 hover:cursor-pointer`}
                                ref={selectWrapperRef}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Select
                                    options={categories.slice(6).map((category) => ({
                                        label: category.name,
                                        value: category.navigate,
                                        icon: category.img,
                                        icon_hover: category.img_hover,
                                    }))}
                                    placeholder="More"
                                    styles={{
                                        control: (styles, { isFocused }) => ({
                                            ...styles,
                                            backgroundColor: 'none',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            fontSize: '0.875rem',
                                            boxShadow: isFocused ? 'none' : styles.boxShadow,
                                            borderColor: isFocused
                                                ? 'transparent'
                                                : styles.borderColor,
                                            '&:hover': {
                                                borderColor: 'none',
                                                cursor: 'pointer',
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
                                        menu: (styles) => ({
                                            ...styles,
                                            marginTop: '0.65rem',
                                            marginBottom: '0.65rem',
                                            borderRadius: '0.5rem',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                                            backgroundColor: '#F1F2F4',
                                            width: '100%',
                                            zIndex: 10,
                                            '@media (min-width: 1024px)': {
                                                width: '10rem',

                                            },
                                        }),
                                        option: (styles, { isFocused }) => ({
                                            ...styles,
                                            backgroundColor: isFocused ? '#cbd5e1' : '#F1F2F4',
                                            color: '#111827',
                                            fontSize: '0.875rem',
                                            padding: '0.75rem',
                                            '&:hover': {
                                                backgroundColor: '#cbd5e1',
                                                cursor: 'pointer',
                                            },
                                            '@media (min-width: 1024px)': {
                                                fontSize: '0.75rem',

                                            },
                                        }),
                                        placeholder: (styles) => ({
                                            ...styles,
                                            fontSize: '1.125rem',
                                            fontWeight: '500',
                                            color: hoveredIndex ? '#0f172a' : '#334155',
                                            '@media (min-width: 1024px)': {
                                                fontSize: '1rem',
                                            },
                                        }),
                                    }}
                                    components={{
                                        Control,
                                        Option: CustomOption,
                                    }}
                                    className='w-full px-0'
                                    isSearchable={false}
                                    menuPlacement={menuPlacement}
                                    onMenuOpen={handleMenuOpen}
                                />
                            </div>
                        ) : null
                    ))}
                </div>
            </div >
            <div className='bg-primary'>
                <div className='flex flex-col gap-4 lg:px-16'>
                    <div className="inline-flex justify-center text-xl  w-full break-words text-justify px-2 pt-10 text-slate-700 font-bold lg:font-bold lg:text-3xl lg:mt-2 ">
                        <p>
                            How It Works
                        </p>
                    </div>
                    <div className='inline-flex justify-center text-md w-full break-words text-center px-2 pb-5 text-slate-700 lg:text-md lg:mt-1 lg:mb-5'>
                        <p>
                            Post a job to tell us about your project. We&apos;ll quickly match you with the right freelancers.
                        </p>
                    </div>
                </div>
                <section className="flex flex-col md:flex-row lg:py-8 p-4 lg:px-16 ">
                    <div className="w-full md:w-[50%] flex flex-col items-center ">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start w-full lg:pr-20"
                                onClick={() => setActiveStep(index)}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all cursor-pointer ${activeStep === index ? 'bg-[#82FD6E] text-white' : 'bg-white text-slate-700'
                                            }`}
                                    >
                                        {index + 1}
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div
                                            style={{ height: `${lineHeights[index]}px`, border: '1px dashed #64748b' }}

                                        ></div>
                                    )}
                                </div>

                                <div ref={(el) => (stepRefs.current[index] = el)} className="flex flex-col items-start w-full pl-4 gap-3" onClick={() => setActiveStep(index)}>
                                    <p className="text-lg lg:text-xl font-semibold">{step.title}</p>
                                    <p className="text-sm lg:text-md text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full md:w-[50%] mt-8 md:mt-0 md:ml-8 ">
                        <img
                            src={steps[activeStep].image}
                            alt={`Step ${activeStep + 1}`}
                            className="rounded-lg mb-4 h-[50vh] w-full object-cover"
                        />
                    </div>
                </section>
            </div>

        </>
    );
};

Control.propTypes = {
    children: PropTypes.node.isRequired,
    isHovered: PropTypes.bool.isRequired,
};

CustomOption.propTypes = {
    data: PropTypes.object.isRequired,
    isFocused: PropTypes.bool.isRequired,
};

export default Information;
