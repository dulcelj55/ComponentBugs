import { useState, useEffect } from 'react'
const Component4 = (props) => {
    useEffect(() => {
      console.log(`The prop value is: ${props.value}`);
    }, []);
    return <div>{props.value}</div>;
  };
  export default Component4;
  