type TablePaginationProps = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newSize: number) => void;
};

export const TablePagination = ({
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) => {
  return (
    <>
      <label htmlFor="page-size">Page size</label>
      <select
        id="page-size"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </>
  );
};
