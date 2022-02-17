import Video from '@components/Video';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';

type VideoListProps = {
  className: string;
};

const index = ({ className }: VideoListProps) => {
  const videos = useSelector((state: RootState) => state.video.videos);

  return (
    <div className={className}>
      {videos.map((item) => (
        <Video direction="row" key={item.etag} {...item} />
      ))}
    </div>
  );
};

export default index;
