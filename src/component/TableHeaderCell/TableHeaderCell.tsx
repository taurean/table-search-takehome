import { ButtonIcon } from "component/ButtonIcon/ButtonIcon";
import styles from "./TableHeaderCell.module.css";

type TableHeaderCellProps = {
  heading: string;
  className?: string;
  handleSort: () => void;
};

export const TableHeaderCell = ({
  heading,
  className,
  handleSort,
}: TableHeaderCellProps) => {
  return (
    <th scope="col" className={`${styles.tableHeaderCell} ${className}`}>
      <span className={styles.headingLabel}>{heading} </span>
      <ButtonIcon
        handleClick={handleSort}
        icon="Sort"
        label={`sort by ${heading}`}
      />
    </th>
  );
};
