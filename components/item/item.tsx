import { Item } from "@/models/item";
import Image from "next/image";
import styles from "./item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface AppProps {
  item: Item;
}

export default function ItemCard({ item }: AppProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.flex_between} ${styles.top}`}>
        <div>
          <div className={`${styles.on_sale} ${!item.onSale && styles.hidden}`}>
            <span>•</span> ON SALE
          </div>
          {item.stock > 0 && <div className={styles.in_stock}>In stock</div>}
        </div>
        <div>
          <input
            type="number"
            defaultValue={1}
            className={styles.amount_input}
          />
        </div>
      </div>
      <div>
        <Image src={item.image} alt={item.name} width={75} height={75}></Image>
        <div className={`${styles.flex_between}`}>
          <span className={styles.name}>{item.name}</span>
          <span>
            <Image
              className={styles.category}
              src={
                item.category === "runescape"
                  ? "https://chicks-games.s3.amazonaws.com/a47caf04-bffb-4992-860a-4ad61ab1672c"
                  : item.category === "old_runescape"
                  ? "https://chicks-games.s3.amazonaws.com/57ccdb2a-47fe-43f8-9b05-100c15d56508"
                  : item.category === "rust"
                  ? "https://chicks-games.s3.amazonaws.com/83b5f604-b4ef-4c1b-8778-914f00ffb4f9"
                  : item.category === "tf2"
                  ? "	https://chicks-games.s3.amazonaws.com/6e5edac2-a37b-4817-9267-97303a33ced2"
                  : "https://chicks-games.s3.amazonaws.com/ea91820d-3bfd-4a3d-878e-70a13a8b01f1"
              }
              alt={item.category}
              width={19}
              height={19}
            ></Image>
          </span>
        </div>
        {item.onSale && (
          <div>
            <span className={styles.price}>${item.price}</span>
            <span className={styles.discounted}>${item.discounted}</span>
          </div>
        )}
        <p className={styles.description}>{item.description}</p>
      </div>
      <div className={`${styles.action_area}`}>
        <button className={`${styles.detail_btn} ${styles.btn}`}>
          Details
        </button>
        <button className={`${styles.add_btn} ${styles.btn}`}>
          <span>Add</span>
          <div>
            <FontAwesomeIcon
              icon={faCartShopping}
              width={16}
              height={15}
              style={{ color: "#ffffff" }}
            />
          </div>
        </button>
      </div>
    </div>
  );
}
