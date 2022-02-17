import Video from '@components/Video';
import useFetch from '@src/hooks/useFetch';
import { RootState } from '@store/index';
import { updateVideo } from '@store/videoSlice';
import { useDispatch, useSelector } from 'react-redux';

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
  channelTitle: string;
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
  const dispatch = useDispatch();
  if (data) {
    dispatch(updateVideo(data.items));
  }
  const videos = useSelector((state: RootState) => state.video.videos);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.videos}>
        {videos.map((item) => (
          <Video key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default index;
