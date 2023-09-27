import { useState } from 'react'
const Component5 = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        {count}
      </div>
    );
  };
  
  export default Component5;