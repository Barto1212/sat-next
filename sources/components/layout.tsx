import Head from 'next/head'
import styles from './layout.module.scss'
import Link from 'next/link'

export const siteTitle = "Syndicat de l'apiculture tourangelle"

const Menu = () => (
  <nav role="navigation" className={styles.nav}>
    <ul>
      <li className={styles.nav__link}>
        <Link href="/actualites">
          <a>Actualités</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="/fiscalite">
          <a>Fiscalité</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Nos services </a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Rucher-École</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Suivi des ruches</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Miellerie</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Novéal (ex Chimex)</a>
        </Link>
      </li>
      <li className={styles.nav__link}>
        <Link href="">
          <a>Actualités</a>
        </Link>
      </li>
   </ul>
  </nav> 
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