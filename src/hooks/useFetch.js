import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


      useEffect(() => {
        const abortControl = new AbortController();


        fetch(url, {signal: abortControl.signal })
          .then(res => {
            if(!res.ok) {
              throw Error('could not fetch data for that resource');
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setError(null);
          })
          .catch(err => {
            setError(err.message);
            setData(null);
          })
           .finally(() => setIsPending(false));
           return () => abortControl.abort();
          
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;