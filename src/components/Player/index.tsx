import { useSearchParams } from 'react-router-dom';

type PlayerProps = {
  className: string;
};

const index = ({ className }: PlayerProps) => {
  const [params] = useSearchParams();
  const id = params.get('id');
  return (
    <div className={className}>
      <iframe
        style={{ width: '100%', aspectRatio: '16 / 9' }}
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default index;
