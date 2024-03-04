import styles from "./TableBody.module.css";

type TableBodyProps = {
  children: React.ReactNode;
};

export const TableBody = ({ children }: TableBodyProps) => {
  return <tbody className={styles.tableBody}>{children}</tbody>;
};
