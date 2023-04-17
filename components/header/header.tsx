import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";
import {
  faAngleDown,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className={`${styles.header}`}>
      <button className={`${styles.btn} ${styles.menu}`}>
        <FontAwesomeIcon icon={faBars} width={16} />
      </button>
      <div className={`${styles.logo_container}`}>
        <a>
          <Image
            className={`${styles.logo}`}
            src={"https://chicksgold.com/logo/chicks-logo-large.svg"}
            width={155}
            height={31}
            alt="logo"
          />
        </a>
      </div>
      <div className={`${styles.nav}`}>
        <ul className={`${styles.flex} ${styles.ul}`}>
          <li>
            <button className={`${styles.btn}`}>
              CURRENCY
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
          <li>
            <button className={`${styles.btn}`}>
              ITEMS
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
          <li>
            <button className={`${styles.btn}`}>
              ACCOUNTS
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
          <li>
            <button className={`${styles.btn}`}>
              SERVICES
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
          <li>
            <button className={`${styles.btn}`}>
              SWAP
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
          <li>
            <button className={`${styles.btn}`}>
              SELL
              <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.spacer}></div>
      <div className={`${styles.flex}`}>
        <button className={`${styles.btn} ${styles.coin}`}>
          USD
          <FontAwesomeIcon icon={faAngleDown} width={12} height={12} />
        </button>
        <button className={`${styles.btn} ${styles.cart}`}>
          <FontAwesomeIcon icon={faCartShopping} width={16} height={16} />
          CART (5)
        </button>
        <button className={`${styles.btn} ${styles.sign_in}`}>
          SIGN IN
          <Image
            src={"https://chicksgold.com/sign-in/profile.png"}
            alt="profile"
            width={16}
            height={14}
          />
        </button>
      </div>
    </header>
  );
}
