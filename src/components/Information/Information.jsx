import { useState } from 'react';
import { Link } from 'react-router-dom';
import categories from '@constants/category';


const Information = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);


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
                        >
                            <div className={`${hoveredIndex === index ? 'bg-slate-500 ' : 'bg-white '}rounded-full p-2 flex items-center justify-center`}>
                                <img
                                    src={hoveredIndex === index ? category.img : category.img_hover}
                                    alt={category.name}
                                    className="w-8 h-8 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <h3 className="font-medium">{category.name}</h3>
                        </div>
                    ) : null
                ))}
            </div>
        </div >
    );
};

export default Information;
