import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import {useInput} from "./useInput.js"
import {useTabs} from "./useTabs.js"
import {useTitle} from "./useTitle.js"
import {useClick} from "./useClick.js"
import {useConfirm} from "./useConfirm.js"


const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];




const App = () => {
  const maxLen = value => !value.includes("@");
  const name = useInput("Mr.", maxLen);
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  const { currentItem, changeItem } = useTabs(1, content);
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, []);
  const anny = () => console.log("안뇽");
  const title = useClick(anny);
  const deleteWorld = () => console.log("세계를 파괴하자!");
  const abort = () => console.log("잠시 보류한다..");
  const confirmDelete = useConfirm("정말인가?", deleteWorld, abort);

  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
      <div>
      <input placeholder="Name" {...name} />
      </div>
      <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
      <div><button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button></div>
    </div>
    <div>
      <h1 ref={title}>안녕!</h1>
    </div>
    <div>
      <button onClick={confirmDelete}>세계를 파괴하자.</button>
    </div>
    </div>
  );
};

const rootElement = document.querySelector("#root");
ReactDOM.render(<App />, rootElement);


export default App;
