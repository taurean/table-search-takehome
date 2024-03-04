import styles from "./SortableTable.module.css";
import { ButtonIcon } from "component/ButtonIcon/ButtonIcon";

type SortableTableProps = {
  children: React.ReactNode;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  tableItemType: string;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newSize: number) => void;
};

export function SortableTable({
  children,
  currentPage,
  pageSize,
  totalItems,
  tableItemType,
  onPageChange,
  onPageSizeChange,
}: SortableTableProps) {
  const LastPageCount = Math.floor(totalItems / pageSize);

  return (
    <div className={styles.sortableTable}>
      <table className={styles.table}>{children}</table>
      <footer className={styles.pagination}>
        <span className={styles.pageSizeSelection}>
          <label htmlFor="page-size">
            <span className={styles.tableSelectItem}>{tableItemType}</span> Per
            page
          </label>
          <select
            id="page-size"
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </span>
        <span>
          <ButtonIcon
            icon="FirstPage"
            label="First page"
            disabled={currentPage === 1}
            handleClick={() => onPageChange(1)}
          />
          <ButtonIcon
            icon="ChevronLeft"
            label="Previous page"
            disabled={currentPage === 1}
            handleClick={() => onPageChange(currentPage - 1)}
          />
          <ButtonIcon
            icon="ChevronRight"
            label="Next page"
            disabled={currentPage === LastPageCount}
            handleClick={() => onPageChange(currentPage + 1)}
          />
          <ButtonIcon
            icon="LastPage"
            label="Last page"
            disabled={currentPage === LastPageCount}
            handleClick={() => onPageChange(LastPageCount)}
          />
        </span>
      </footer>
    </div>
  );
}
