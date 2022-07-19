import { useState, useEffect } from "react";

const useFetchSources = (url) => {
  //use effect runs every render

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for resource");
        }
        return res.json();
      })
      .then((data) => {
        var cnt = 0;
        var sourceIds = [];

        while (data.sources[cnt] != null) {
          sourceIds.push(data.sources[cnt].id);
          cnt++;
        }

        setData(sourceIds);

        //setArticleStack((oldArticleStack) => [
        //         ...oldArticleStack,
        //         data.articles
        //       ]);

        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => abortCont.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetchSources;
