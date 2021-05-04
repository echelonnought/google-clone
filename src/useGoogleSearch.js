import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "fcefc63eab1c7efb9";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result))
        .catch((err) => {
          alert(err);
        });
    };
    return fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
