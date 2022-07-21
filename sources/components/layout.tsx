import Head from 'next/head'
import Header from './header.jsx'
import styles from './layout.module.scss'
import MyModal from './MyModal'
import { useState } from 'react'

export const siteTitle = "Syndicat de l'apiculture tourangelle"



export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [modalIsOpen, setIsOpen] = useState(false);
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
      <Header setIsOpen={setIsOpen} />
      <MyModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      <main className={styles.container}>{children}</main>
    </>
  )
}