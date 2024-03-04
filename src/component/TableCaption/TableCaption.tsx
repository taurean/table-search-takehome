import styles from "./TableCaption.module.css";

type TableCaptionProps = {
  children: React.ReactNode;
};

export const TableCaption = ({ children }: TableCaptionProps) => {
  return <caption className={styles.caption}>{children}</caption>;
};
