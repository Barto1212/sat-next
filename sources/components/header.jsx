import styles from './header.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from 'react';

const itemsList = [
  {name: "Actualités", link: "/"},
  {name: "Présentation", link: "/presentation"},
  {name: "Adhésion", link: "/adhesion"},
  // {name: "Fiscalité", link: "/fiscalite"},
  // {name: "Rucher école", link: "/rucherecole"},
  // {name: "Mielerie", link: "/mielerie"},
]


const Item = ({item, menuToggleHandler}) => {
  const router = useRouter()
  return (
    <div className={router.asPath === item.link ? styles.activePage : ""}>
      <li>
        <Link href={item.link}>
          <a onClick={menuToggleHandler}>{item.name}</a>
        </Link>
      </li>
    </div>
  )
}

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  })
  useEffect(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
  }, []);
  
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
        <Image
          className={styles.header__content__logo}
          src="/img/bee.svg"
          width={150}
          height={150}
          alt="abeille"
        />
        <nav
        className={`${styles.header__content__nav} ${
          openMenu && size.width < 1050 ? styles.isMenu : ""
        }`}
        >
          <ul>
            {itemsList.map(item => (<Item key={item.name} item={item} menuToggleHandler={menuToggleHandler} />))}
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