import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '@constants/category';
import Select, { components } from 'react-select';
import More from '@icons/dots.svg'
import More_hover from '@icons/dots-hover.svg'

const Control = (props) => {
    const iconSrc = props.isHovered ? More : More_hover;

    return (
        <components.Control {...props}>
            <div className=' flex gap-2'>
                <div className={`${props.isHovered ? 'bg-slate-500' : 'bg-white'} rounded-full p-2 flex items-center justify-center w-12 h-12`}>
                    <img
                        src={iconSrc}
                        alt="More"
                        className="w-6 h-6 transition-transform duration-300 ease-in-out"
                    />
                </div>
                {props.children}
            </div>
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
                    className="mr-2 w-6 h-6"
                />
                <span className={`${isFocused ? 'text-slate-900' : 'text-slate-700'}`}>{data.label}</span>
            </div>
        </components.Option>
    );
};



const Information = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [menuPlacement, setMenuPlacement] = useState('bottom');
    const selectWrapperRef = useRef(null);

    const handleMenuOpen = () => {
        if (window.innerWidth >= 1024) {
            return setMenuPlacement('bottom');
        }
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
        <div className="my-8 flex flex-col gap-7">
            <div className="text-xl w-[90%] break-words text-justify px-2 text-slate-700 font-bold lg:text-base lg:mt-4">
                <p>
                    Let&apos;s help you choose the category you want
                </p>
            </div>
            <div className='flex flex-col gap-3'>
                {categories.map((category, index) => (
                    index < 5 ? (
                        <Link
                            key={index}
                            to={`${category?.navigate}`}
                            className={`flex px-3 py-2 rounded-[32px] mx-2 gap-4 text-lg items-center transition-colors duration-300 ease-in-out ${hoveredIndex === index ? 'bg-slate-300 shadow-md shadow-green-200 text-slate-900' : 'bg-primary text-slate-700'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className={`${hoveredIndex === index ? 'bg-slate-500 ' : 'bg-white '}rounded-full p-2 flex items-center justify-center`}>
                                <img
                                    src={hoveredIndex === index ? category.img : category.img_hover}
                                    alt={category.name}
                                    className="w-8 h-8 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <h3 className="font-medium">{category.name}</h3>
                        </Link>
                    ) : index === 5 ? (
                        <div
                            key={index}
                            to={`${category?.navigate}`}
                            className={`flex px-3 py-2 rounded-[32px] mx-2 gap-4 text-lg items-center transition-colors duration-300 ease-in-out ${hoveredIndex === index ? 'bg-slate-300 shadow-md shadow-green-200 text-slate-900' : 'bg-primary text-slate-700'}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            ref={selectWrapperRef}
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
                                    menu: (styles) => ({
                                        ...styles,
                                        marginTop: '0.65rem',
                                    }),
                                    option: (styles, { isFocused }) => ({
                                        ...styles,
                                        backgroundColor: isFocused ? '#cbd5e1' : '#F1F2F4',
                                        color: '#111827',
                                        fontSize: '0.875rem',
                                        padding: '0.75rem',
                                        '&:hover': {
                                            backgroundColor: '#cbd5e1',
                                        },
                                    }),
                                    placeholder: (styles) => ({
                                        ...styles,
                                        fontSize: '1.125rem',
                                        fontWeight: '500',
                                        color: hoveredIndex ? '#0f172a' : '#334155',
                                    }),
                                }}
                                components={{
                                    Control: (props) => (
                                        <Control {...props} isHovered={hoveredIndex === index} />
                                    ),
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
