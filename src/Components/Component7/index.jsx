import { useState } from 'react'
const Component7 = () => {
    const [name, setName] = useState("");
    console.log(name);
    const updateName = () => {
      setName("John");
      
    };
    return <button onClick={updateName}>Log Name</button>;
  };
  
  export default Component7;
  