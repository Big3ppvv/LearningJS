import React, { useState, useEffect } from "react";

const FetchUrl = () => {
  const [state, setState] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/videogames",{
        headers:{
            "Access-Control-Allow-Origin": "http://localhost:5173"
        }
    })
      .then((data) => {
        return data.json();
      })
      .then((value) => {
        console.log(value);
      });
  }, [state]);

  return (
    <div>
      <h2>{state}</h2>
      <button onClick={() => setState(state + 1)}>Change Number</button>
    </div>
  );
};

export default FetchUrl;
