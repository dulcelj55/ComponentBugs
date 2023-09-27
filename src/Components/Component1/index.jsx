import { useState } from 'react'
const Component1 = () => {
    const [count, setCount] = useState(0);
    return (
      <div>
        <button onClick={() => setCount(count +1)}>Increase</button>
        {count}
      </div>
    );
  };
  export default Component1;
  