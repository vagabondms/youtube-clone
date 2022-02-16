import { VideoInfo } from '@components/Videos';

import styles from './Video.module.scss';

const index = ({
  snippet: {
    title,
    thumbnails: {
      medium: { url },
    },
  },
}: VideoInfo) => (
  <li>
    <div className={styles.video}>
      <img className={styles.img} src={url} alt="thumbnail" />

      <div>
        <h3>{title}</h3>
      </div>
    </div>
  </li>
);

export default index;
