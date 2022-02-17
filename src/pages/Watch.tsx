import Layout from '@components/Layout';
import { useSearchParams } from 'react-router-dom';

const Video = () => {
  const [params] = useSearchParams();
  const id = params.get('id');

  return (
    <Layout>
      <div>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Layout>
  );
};

export default Video;
