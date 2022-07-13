import Layout from '../components/layout'
import articles from '../styles/articles.module.scss'
import moment from 'moment'
import { getSortedPostsData } from '../utils/posts';
moment.locale('fr')

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


interface AllPostsData {
  id: string;
  date: string;
  title: string;
  content: string
}

export default function News({allPostsData}) {
  return (
    <Layout>
      <section>
        <ul className={articles.list}>
          {allPostsData.map(({ id, date, title, content }) => (
            <li className={articles.list__item} key={id}>
              <div className={articles.list__item__title}>
                {title}
              </div>
              <div className={articles.list__item__date}>
                {date}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
                className={articles.list__item__body}>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
