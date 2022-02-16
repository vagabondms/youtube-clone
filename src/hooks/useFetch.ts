import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const useFetch = <T>(props: AxiosRequestConfig): [T | null] => {
  const [data, setData] = useState<T | null>(null);

  const fetchData = async (fetchProps: AxiosRequestConfig) => {
    const res = await axios(fetchProps);
    setData(res.data);
  };

  useEffect(() => {
    fetchData(props);
  }, [props.url]);

  return [data];
};

export default useFetch;
