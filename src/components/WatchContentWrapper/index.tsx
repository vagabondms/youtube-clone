import Player from '@components/Player';
import VideoList from '@components/VideoList';

import styles from './Watch.module.scss';

const index = () => (
  <div className={styles.watch}>
    <Player className={styles.player} />
    <VideoList className={styles.list} />
  </div>
);

export default index;
