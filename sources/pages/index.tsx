import Layout from '../components/layout'
import actuStyle from '../styles/actualites.module.scss'
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
        <ul className={actuStyle.list}>
          {allPostsData.map(({ id, date, title, content }) => (
            <li className={actuStyle.list__item} key={id}>
              <div className={actuStyle.list__item__title}>
                {title}
              </div>
              <div className={actuStyle.list__item__date}>
                {date}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
                className={actuStyle.list__item__body}>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
