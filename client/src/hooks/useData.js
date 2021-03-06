import { useEffect } from 'react';
import { Client } from '../services/api';

const useData = (slug, setState) => {
  useEffect(() => {
    const getData = async () => {
      await Client.get(slug).then((res) => {
        setState(res.data);
      });
    };

    getData();
  }, [slug, setState]);
};

export default useData;
