import Head from 'next/head'
import styles from './layout2.module.scss'
import Link from 'next/link'

export const siteTitle = "Syndicat de l'apiculture tourangelle"

const itemsMenu = [
  {name: "Actualités", link: "/actualites"},
  {name: "Fiscalité", link: "/fiscalite"},
  {name: "Nos services", link: "/"},
  {name: "Rucher école", link: "/"},
  {name: "Mielerie", link: "/"},
  {name: "Ruche connectée", link: "/"},
]

const Menu = () => (
  <>
    <div className={styles.brand}>
      <a href="#!">🍀 Clover Clothing</a>
    </div>
      <nav>
        <div className={styles.navmobile}>
          <a id="nav-toggle" href="#!"><span></span></a>
        </div>
        <ul className={styles.navlist}>
          {itemsMenu.map(item =>(
            <li key={item.name} >
              <Link href={item.link}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
  </>

)

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
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <Menu />
      </header>
      <main>{children}</main>
    </div>
  )
}