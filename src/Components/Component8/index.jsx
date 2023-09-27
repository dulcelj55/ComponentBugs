import { useState } from 'react'
const Component8 = () => {
    const [items, setItems] = useState([]);
    const addItem = () => {
      let itemsCopy = [...items];
      itemsCopy.push("New Item");
      setItems(itemsCopy);
    };
    return(
    <>
    {
        items.map((item)=>{
            return <div>{item}</div>
        })
    }
    <button onClick={addItem}>Add Item</button>
    </>
  )};
  
  export default Component8;
  