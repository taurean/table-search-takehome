import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";
import { ReactComponent as CaretDown } from "../../assets/CaretDown.svg";
import { ReactComponent as CaretUp } from "../../assets/CaretUp.svg";
import { ReactComponent as ChevronLeft } from "../../assets/ChevronLeft.svg";
import { ReactComponent as ChevronRight } from "../../assets/ChevronRight.svg";
import { ReactComponent as FirstPage } from "../../assets/FirstPage.svg";
import { ReactComponent as LastPage } from "../../assets/LastPage.svg";
import { ReactComponent as Search } from "../../assets/Search.svg";
import { ReactComponent as Sort } from "../../assets/Sort.svg";

import styles from "./ButtonIcon.module.css";

const iconPath: { [key: string]: React.ElementType } = {
  ArrowDown,
  ArrowUp,
  CaretDown,
  CaretUp,
  ChevronLeft,
  ChevronRight,
  FirstPage,
  LastPage,
  Search,
  Sort,
};

type ButtonIconProps = {
  icon: string;
  label: string;
  disabled?: boolean;
  handleClick: () => void;
};

export function ButtonIcon({
  icon,
  label,
  disabled,
  handleClick,
}: ButtonIconProps) {
  const IconComponent = iconPath[icon];

  return (
    <button
      className={styles.button}
      aria-label={label}
      onClick={handleClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <IconComponent className={styles.icon} />
    </button>
  );
}
