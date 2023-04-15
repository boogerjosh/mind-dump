import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (searchTerm) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrendingGIFs = async () => {
    const options = {
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/trending?api_key=vEbakbyVTwtR8MKWgovBBmwZ5ojJ8cwN&limit=30&rating=g`,
    };

    try {
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      throw new Error(`Unable to fetch trending GIFs: ${error}`);
    }
  };

  const fetchSearchResults = async (query) => {
    const options = {
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=vEbakbyVTwtR8MKWgovBBmwZ5ojJ8cwN&q=${query}&limit=30&rating=g`,
    };

    try {
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      throw new Error(`Unable to fetch search results for ${query}: ${error}`);
    }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      let fetchedData;
      if (searchTerm) {
        fetchedData = await fetchSearchResults(searchTerm);
      } else {
        fetchedData = await fetchTrendingGIFs();
      }
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
