import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export const siteTitle = "Syndicat de l'apiculture tourangelle"

const itemsMenu = [
  {name: "Actualités", link: "/actualites"},
  {name: "Fiscalité", link: "/fiscalite"},
  {name: "Nos services", link: "/"},
  {name: "Rucher école", link: "/"},
  {name: "Mielerie", link: "/"},
  {name: "Ruche connectée", link: "/"},
]
const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false)
  const changeState = () => {
    setIsOpen(i => !i)
  }

  if (isOpen) {
    return (
      <a className={styles.active} onClick={changeState} href="#">
        <span className={styles.span}></span>
      </a>
    )
  }
  return (
    <a className={styles.navToggle} onClick={changeState} href="#">
      <span className={styles.span}></span>
    </a>
  )
}

const Menu = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.NavigationContainer}></div>
      <div className={styles.brand}>
        <a className={styles.a} href="#">SAT</a>
      </div>
      <nav role="navigation" className={styles.nav} >
        <div className={styles.navMobile}>
          <NavToggle />
        </div>
        <div className={styles.navList}>
          <ul className={styles.ul}>
            {itemsMenu.map(item =>(
              <li key={item.name} className={styles.li}>
                <Link href={item.link}>
                  <a className={styles.a}>{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Promouvoir l'apiculture en Touraine"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Menu />
      <main>{children}</main>
    </div>
  )
}