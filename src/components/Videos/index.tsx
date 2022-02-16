import Video from '@components/Video';
import useFetch from '@src/hooks/useFetch';

import styles from './Videos.module.scss';

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Thumbnails = {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
};

type VideoSnippet = {
  title: string;
  thumbnails: Thumbnails;
};

export type VideoInfo = {
  etag: string;
  id: string;
  snippet: VideoSnippet;
};

type PopularVideoList = {
  etag: string;
  items: VideoInfo[];
  nextPageToken: string;
};

const index = () => {
  const [data] = useFetch<PopularVideoList>({
    url: 'videos?part=snippet&chart=mostPopular&maxResults=25',
  });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.videos}>
        {data?.items.map((item) => (
          <Video key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default index;
