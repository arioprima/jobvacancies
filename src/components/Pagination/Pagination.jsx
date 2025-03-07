import PropTypes from 'prop-types';
import ReactPaginate from "react-paginate";
import './Style.css';

const Paginition = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={onPageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                forcePage={currentPage}
            />
        </div>
    )
}

Paginition.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Paginition;