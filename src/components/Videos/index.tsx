import useFetch from '@src/hooks/useFetch';

import styles from './Videos.module.scss';

const index = () => {
  const [data] = useFetch({
    url: 'videos?part=snippet&chart=mostPopular&maxResult=25',
  });
  console.log(data);

  return <div className={styles.videos} />;
};

export default index;
