import { Pagination } from "@mui/material";
import './Pagination.scss'

function CustomPagination(props: any) {

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: any) => {
        props.setPage(value);
        console.log(event);
    }

    const itemsPerPage = 2;
    const totalItems = props.errorBoardData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return (
        <Pagination
            className="custom-pagination"
            count={totalPages}
            page={props.page}
            onChange={handlePageChange}
            siblingCount={1}
            boundaryCount={1} />
    )
}

export default CustomPagination