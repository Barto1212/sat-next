import Head from 'next/head'
import Link from 'next/link';
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Home({posts, date}) {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Promouvoir l'apiculture en Indre et Loire"
        />
        <title>Syndicat d'apiculture Tourangelle</title>
      </Head>
      <main>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
        </Box>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
  .then(r => r.json())
  return  {
    props: {
      posts,
      date: (new Date()).toString()
    },
    revalidate: 5
  }
}
