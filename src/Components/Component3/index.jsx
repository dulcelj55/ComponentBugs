import { useState, useEffect } from 'react'
const Component3 = () => {
    const [number, setNumber] = useState(Math.random());
  
    useEffect(() => {
      setNumber(Math.random());
    }, []);
  
    return <div>Random number: {number}</div>;
  };
  
  export default Component3;
  