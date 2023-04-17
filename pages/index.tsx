import Head from "next/head";
import styles from "@/styles/index.module.css";
import MOCK_DATA from "../MOCK_DATA.json";
import Header from "@/components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";
import { Footer } from "@/components/footer/footer";
import List from "@/components/list/list";

export default function Home() {
  const [items, setItems] = useState(MOCK_DATA);

  return (
    <>
      <Head>
        <title>Chicks Gold</title>
        <meta name="description" content="Condimentum consectetur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header></Header>
      <main className={`${styles.main}`}>
        <h1 className={`${styles.title}`}>Condimentum consectetur</h1>
        <div className={`${styles.filters}`}>
          <div className={`${styles.select_game}`}>
            <Image
              src="https://chicksgold.com/icons/item-default.svg"
              alt="icon"
              width={30}
              height={30}
              className={`${styles.icon}`}
            />

            <select
              name=""
              id=""
              className={`${styles.input_icon} ${styles.input}`}
              defaultValue={""}
            >
              <option value="">Select a game</option>
              <option value="LoL">League of legends</option>
              <option value="RS">Runescape</option>
              <option value="TF2">Team Fortress 2</option>
            </select>
          </div>
          <div className={`${styles.search}`}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`${styles.icon}`}
              color="#CFD1D6"
            />
            <input
              type="text"
              className={`${styles.input} ${styles.input_icon}`}
              placeholder="Search"
            />
          </div>
          <div className={`${styles.subfilters}`}>
            <div>
              <button className={`dropdown price`}>
                <div>
                  <Image
                    src="https://chicksgold.com/icons/green-icons/item-bag.svg"
                    alt="icon"
                    width={18}
                    height={24}
                  />
                  <span className={`top_label`}>Price</span>
                  <span className={`value`}>All</span>
                  <FontAwesomeIcon icon={faCaretDown} width={20} height={16} />
                </div>
              </button>
            </div>
            <div>
              <button className={`dropdown item_type`}>
                <div>
                  <Image
                    src="https://chicksgold.com/icons/green-icons/feather.svg"
                    alt="icon"
                    width={24}
                    height={24}
                  />
                  <span className={`top_label`}>Item Type</span>
                  <span className={`value`}>All</span>
                  <FontAwesomeIcon icon={faCaretDown} width={20} height={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <List items={items} />
      </main>
      <Footer />
    </>
  );
}
