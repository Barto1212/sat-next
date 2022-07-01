import styles from './header.module.scss'
import Link from 'next/link';

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';

const itemsMenu = [
  {name: "Actualités", link: "/actualites"},
  {name: "Fiscalité", link: "/fiscalite"},
  {name: "Nos services", link: "/"},
  {name: "Rucher école", link: "/"},
  {name: "Mielerie", link: "/"},
  {name: "Ruche connectée", link: "/"},
]


const Header = () => {
  // console.log(window.innerWidth)
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, []);

  useEffect(() => {
    if (size.width > 1050 && openMenu) {
      setOpenMenu(false)
    }
  }, [size.width, openMenu])
  const menuToggleHandler = () => (setOpenMenu(o => !o))

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h2 className={styles.header__content__logo}>navbar</h2>
        <nav
        className={`${styles.header__content__nav} ${
          openMenu && size.width < 1050 ? styles.isMenu : ""
        }`}
        >
          <ul>
            {itemsMenu.map(item => (
              <li key={item.name}>
                <Link href={item.link}>
                  <a onClick={menuToggleHandler}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button>Connexion admin</button>
        </nav>
        <div className={styles.header__content__toggle}>
          {openMenu ? <AiOutlineClose onClick={menuToggleHandler} /> : <BiMenuAltRight onClick={menuToggleHandler} />}
        </div>
      </div>
    </header>
  )
}

export default Header