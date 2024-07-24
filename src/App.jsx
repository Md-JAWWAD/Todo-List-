import { useState } from 'react'
import Backpic from './assets/back pic.jpg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  let [value, setValue] = useState();
  let [arrValue, setarrValue] = useState([]);
  let change = (d) => {
    setValue(d.target.value);
  };
  let adds = () => {
    // console.log(value);
    if (value != "") {
      setarrValue([...arrValue, value]);
      setValue("");
      console.log(arrValue);
    }
  };
  let del = (i) => {
    setarrValue(
      arrValue.filter((ele, ind) => {
        return i != ind;
      })
    );
  };
  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          onChange={change}
          placeholder="Enter here"
          value={value}
        />
        <button onClick={adds}>Add</button>
      </div>
      <div className="lists">
        {arrValue.map((e, i) => {
          return (
            <li>
              {e} &nbsp; &nbsp; &nbsp; &nbsp;
              <button onClick={() => del(i)}>X</button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
