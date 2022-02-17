import Video from '@components/Video';
import { RootState } from '@store/index';

import { useSelector } from 'react-redux';

import styles from './Videos.module.scss';

const index = () => {
  const videos = useSelector((state: RootState) => state.video.videos);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.videos}>
        {videos.map((item) => (
          <Video key={item.etag} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default index;
