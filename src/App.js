import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState("")
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  //filters and returns an array of filtered items
  const filterItems = items.filter(item =>{
     return item.toLowerCase().includes(query.toLowerCase())
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === '') return;
    setItems(prev => {
      //appends the new value, while copying the previous array as 
      return [...prev, value]
    })
    inputRef.current.value = "";

  }
  return (
    <>
      Search
      <input type="search" onChange={e => setQuery(e.target.value)}/>
      <br/>
      <br/>
      <br/>
      <form onSubmit={onSubmit}>
        New Item: <input ref = {inputRef} type = "text"/>
        <button type = "submit">Add</button>
      </form>
      <h3>Current Items:</h3>
      {filterItems.map(fItems => {
         return <div>{fItems}</div>
      })}
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
