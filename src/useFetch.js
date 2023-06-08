import { useState, useEffect } from "react";

//this is a custom hook
const useFetch = (url) => {
    const [data, setData] = useState(null);
    //this is the pending state so we see the loading... text
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    //runs after every render, but a dependency array limits the useEffect to running only on the first render
      //fetch the data as soon as the component renders
      useEffect(() => {
        //associate it with the fetch to abort the fetch
        const abortControl = new AbortController();


        fetch(url, {signal: abortControl.signal })
        //if there is an error, server will send an error back
          .then(res => {
            console.log(res); // this is the response object
            if(!res.ok) {
              //then we throw a user defined error, execution stops in the function and control goes to the first catch block
              throw Error('could not fetch data for that resource');
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setError(null); //if it is successfull, we set this back the initial state.
          })
          //catch statement defines a block of code to run if an error is thrown.
          .catch(err => {
            setError(err.message);
            setData(null);  //prevents error message and blogs from showing up at same time
          })
           .finally(() => setIsPending(false));
          //this will abort the fetch that it is associated with
           return () => abortControl.abort();
          
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;