import Layout from '../components/layout'
import presentationStyle from '../styles/presentation.module.scss'
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
        <h1 className={presentationStyle.title}>
          Les dernières actualités
        </h1>
        <ul className={presentationStyle.list}>
          {allPostsData.map(({ id, date, title, content }) => (
            <li className={presentationStyle.list__item} key={id}>
              <div className={presentationStyle.list__item__date}>
                {date}
              </div>
              <div className={presentationStyle.list__item__title}>
                {title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                }}
                className={presentationStyle.list__item__body}>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
