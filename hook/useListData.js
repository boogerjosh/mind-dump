import { useState, useEffect } from 'react';
import { useContext } from 'react';

import listOfGIFs from '../assets/data/data';
import { GlobalStateContext } from '../hook/GlobalState';

const useListData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setGlobalState } = useContext(GlobalStateContext);

  useEffect(() => {
    setIsLoading(true);
    setGlobalState(prevState => ({ ...prevState, items:  listOfGIFs}));
    setIsLoading(false);
  }, []);

  return { isLoading };
};

export default useListData;
