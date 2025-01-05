import { useState } from "react"

function App() {

  // const count = 0;
  // desestruturação
  // count => dado
  // setCount => função que altera o dado
  // useState(0) -> valor inicial da variável, senão começa com undefined
  const [count, setCount] = useState(0);

  //comportamento do botão incrementar
  function handleClick() {
    setCount(count + 1);
  }
  function handleClickDec() {
    setCount(count - 1);
  }

  return (
    <div>
       <h1>Contagem = {count} </h1>
       <button onClick={handleClick}>Incrementar</button>
       <button onClick={handleClickDec}>Decrementar</button>
    </div>
   
  )
}

export default App
