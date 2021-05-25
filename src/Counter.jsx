import React, { useState, useEffect, useMemo } from 'react';

function Counter(){
    let [count, setCount] = useState(0); // Hook

  
    useEffect(() => {
        console.log('useEffect called on Mount');
    }, []);

    useEffect(() => {
      console.log('useEffect from Counter change');

      return () => console.log('count useEffect');
        
    }, [count]);
  
    // console.log('Rendered')
    let increment = () => {
      setCount(count + 1);

    };
  
    let decrement = () => {
      if(count < 1){
        return;
      }
      setCount(count - 1);

    };
  
    console.log('Rendered Counter');
  
    return (
      <>
        <h2>{count}</h2>
        <button onClick={increment}>Add + </button>
        <button onClick={decrement}>Subtract - </button>
      </>
    )
  }

  export default Counter;