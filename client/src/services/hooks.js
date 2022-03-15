import { useEffect } from 'react';
import Client from './api';

const useData = (slug, setState) => {
  useEffect(() => {
    const getData = async () => {
      await Client.get(slug).then((res) => {
        setState(res.data);
      });
    };

    getData();
  }, []);
};

export default useData;
