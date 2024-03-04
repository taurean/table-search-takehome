import styles from "./TableDataCell.module.css";

type TableProps = {
  children: React.ReactNode;
};

export const TableDataCell = ({ children }: TableProps) => {
  return <td className={styles.tableDataCell}>{children}</td>;
};
