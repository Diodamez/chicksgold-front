import { Item } from "@/models/item";
import styles from "./list.module.css";
import ItemCard from "../item/item";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Paginator } from "../paginator/paginator";

interface AppProps {
  items: Item[];
}

export default function List({ items }: AppProps) {
  return (
    <div className={`${styles.list_container}`}>
      <div className={`${styles.items_filter}`}>
        <div className={`${styles.items_shown}`}>Showing 20 - from 125</div>
        <div className={`${styles.sort_select}`}>
          <button className={`dropdown ${styles.dropdown}`}>
            <div>
              <Image
                src="https://chicksgold.com/icons/green-icons/filter.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <span className={`top_label ${styles.top_label}`}>Sort By</span>
              <span className={`value`}>Featured</span>
              <FontAwesomeIcon icon={faCaretDown} width={20} height={16} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.list}>
        {items.map((value) => (
          <ItemCard item={value} key={value.id}></ItemCard>
        ))}
      </div>
      <Paginator />
    </div>
  );
}
