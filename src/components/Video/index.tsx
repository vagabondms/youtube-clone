import { VideoInfo } from '@src/App';
import { Link } from 'react-router-dom';

import styles from './Video.module.scss';

interface VideoInfoProps extends VideoInfo {
  direction?: 'row' | 'column';
}

const index = ({
  id,
  snippet: {
    title,
    thumbnails: {
      medium: { url },
    },
    channelTitle,
  },
  direction = 'column',
}: VideoInfoProps) => {
  const flattenId = typeof id === 'object' ? id.videoId : id;
  return (
    <Link to={`/watch?id=${flattenId}`}>
      <div className={styles.video} style={{ flexDirection: direction }}>
        <img
          className={styles.img}
          src={url}
          alt="thumbnail"
          style={direction === 'row' ? { width: '100px' } : {}}
        />
        <div className={styles.details}>
          <div className={styles.title}>{title}</div>
          <div className={styles.channelTitle}>{channelTitle}</div>
        </div>
      </div>
    </Link>
  );
};

export default index;
