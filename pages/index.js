import Head from 'next/head'
import Link from 'next/link';
// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home({posts, date}) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setCount(c => c + 1), 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);
  return (
    <div>
      <Head>
        <title>Mon super blog</title>
      </Head>
      <main>
        <h1>
          Count: {count}
        </h1>
        <h2>Il est {date}</h2>
        <ul>
          {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <a>
                <h3>
                  {post.title}
                </h3>
              </a>
            </Link>
          </li>)
          )}
        </ul>
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
