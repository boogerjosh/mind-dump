import { useState, useEffect } from 'react';
import listOfGIFs from '../assets/data/data';

const useListData = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
    setList(listOfGIFs);
    setIsLoading(true);
  }, []);

  return { list };
};

export default useListData;
