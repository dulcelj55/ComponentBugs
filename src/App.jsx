import { useStat, useEffect } from 'react'
import Component1 from "./components/component1";
import Component10 from "./components/component10";
import Component2 from "./components/component2";
import Component3 from "./components/component3";
import Component4 from "./components/component4";
import Component5 from "./components/component5";
import Component6 from "./components/component6";
import Component7 from "./components/component7";
import Component8 from "./components/component8";
import Component9 from "./components/component9";
import "./index.css";
import './App.css'

function App() {
 

  return (
    <>
  <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 value="Hello" />
      <Component5 />
      <Component6 message="hello!!!"/>
      <Component7 />
      <Component8 />
      <Component9 firstName="Jane" lastName="Doe"/>
      <Component10 />
    </div>
    </>
  )
}

export default App
