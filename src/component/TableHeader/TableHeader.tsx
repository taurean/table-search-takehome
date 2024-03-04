import styles from "./TableHeader.module.css";

type TableHeaderProps = {
  children: React.ReactNode;
};

export const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className={styles.tableHeader}>{children}</thead>;
};
