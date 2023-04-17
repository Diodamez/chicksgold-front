import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./paginator.module.css";

export const Paginator = () => {
  return (
    <div className={`${styles.paginator_container}`}>
      <ul className={`${styles.paginator}`}>
        <li className={`${styles.change_page}`}>
          <FontAwesomeIcon icon={faChevronLeft} width={10} />
        </li>
        <li className={`${styles.active}`}>1</li>
        <li className={`${styles.sm_hide}`}>2</li>
        <li className={`${styles.sm_hide}`}>3</li>
        <li className={`${styles.sm_hide}`}>4</li>
        <li className={`${styles.rest}`}>...</li>
        <li>11</li>
        <li className={`${styles.change_page}`}>
          <FontAwesomeIcon icon={faChevronRight} width={10} />
        </li>
      </ul>
    </div>
  );
};
