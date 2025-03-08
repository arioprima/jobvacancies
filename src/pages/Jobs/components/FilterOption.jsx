import PropTypes from 'prop-types';

const FilterOption = ({ onClose, children }) => {
    return (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="relatif flex items-center justify-center p-4 border-b border-slate-400 ">
                <h2 className="text-lg  font-medium">Edit Your Search</h2>
                <button
                    onClick={onClose}
                    className="absolute right-5 top-1.5 text-gray-600 hover:text-gray-700 text-4xl "
                >
                    &times;
                </button>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

FilterOption.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default FilterOption
