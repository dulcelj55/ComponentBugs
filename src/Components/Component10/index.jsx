import { useState } from 'react'
const Component10 = () => {
    // state is not changing correctly when we type in the input
    const [inputValue, setInputValue] = useState("");
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return <input value={inputValue} onChange={handleInputChange} />;
  };
  
  export default Component10;
  