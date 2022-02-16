import { VideoInfo } from '@components/Videos';
import { Link } from 'react-router-dom';

import styles from './Video.module.scss';

const index = ({
  id,
  snippet: {
    title,
    thumbnails: {
      medium: { url },
    },
    channelTitle,
  },
}: VideoInfo) => (
  <Link to={`/watch?id=${id}`}>
    <div className={styles.video}>
      <img className={styles.img} src={url} alt="thumbnail" />
      <div className={styles.details}>
        <div className={styles.title}>{title}</div>
        <div className={styles.channelTitle}>{channelTitle}</div>
      </div>
    </div>
  </Link>
);

export default index;
