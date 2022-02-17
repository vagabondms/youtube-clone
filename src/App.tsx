import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { updateVideo } from '@store/videoSlice';
import useFetch from '@src/hooks/useFetch';
import { RootState } from '@store/index';
import Main from './pages/Main';
import Watch from './pages/Watch';

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
  id:
    | string
    | {
        videoId: string;
      };
  snippet: VideoSnippet;
};

type PopularVideoList = {
  etag: string;
  items: VideoInfo[];
  nextPageToken: string;
};

function App() {
  const query = useSelector((state: RootState) => state.query.query);
  const dispatch = useDispatch();
  const [data] = useFetch<PopularVideoList>({
    url: query
      ? `search?part=snippet&q=${query}&maxResults=25`
      : 'videos?part=snippet&chart=mostPopular&maxResults=25',
  });

  if (data) {
    dispatch(updateVideo(data.items));
  }

  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
