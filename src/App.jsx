import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fase 5 - Operar</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" size="300px"/>
        </a>
      <div className="card">
      <p className="read-the-docs">
        Para acceder a los proyectos de click en este boton
      </p>
      </div>
      <div>
        <button onClick={() => window.open("/F2/index.html", "_blank")}>
          Proyecto Fase 2
        </button>
      </div>
      <div>
        <br></br>
        <button onClick={() => window.open("/F3/index.html", "_blank")}>
          Proyecto Fase 3
        </button>
      </div>
      <div>
      <br></br>
        <button onClick={() => window.open("/F4/index.html", "_blank")}>
          Proyecto Fase 4
        </button>
      </div>
      </div>
    </>
  )
}

export default App
