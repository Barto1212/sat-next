import Head from 'next/head'
import Header from './header.jsx'
import styles from './layout.module.scss'

export const siteTitle = "Syndicat de l'apiculture tourangelle"



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{siteTitle}</title>
        <meta
          name="description"
          content="Promouvoir l'apiculture en Touraine"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  )
}