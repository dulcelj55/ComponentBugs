import { useState } from 'react'


const Component2 = () => {
  const [todos, setTodos] = useState([{ text: "Learn React" }]);

  const addTodo = () => {
    const newTodo = {text: "New todo"}
    setTodos([...todos, newTodo])
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.text}>{todo.text}</div>
      ))}
      <button onClick={addTodo}>Add Todo</button>

    </div>
  );

// const [todos, setTodos] = useState([{ text: "" }]);

// return (
//         <div>
//             <input onClick={inputClick}{e.target.value}></input>
//           {todos.map((todo) => (
//             <div key={todo.text}>{todo.text}</div>
//           ))}
//           <button onClick={addTodo}>Add Todo</button>
    
//         </div>
//       );

};
export default Component2;