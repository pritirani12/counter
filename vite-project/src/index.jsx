import { useState } from 'react'
import "./style.css";

function App() {
  const [cart,addtocart] = useState(0)

  function buye(){
    addtocart(cart + 1);
  }

  function buy(){
    addtocart(cart - 1);
  }

  return (
    <>
      <div className="counter-container">
        <div className="box">
        <h1>Counter</h1>
        <h2>{cart}</h2>
        <button  onClick={buye} className="btn">Increment</button>
        <button onClick={buy} className="btn">Decrement</button>
    </div>
    </div> 
    </>
  )
}

export default App
