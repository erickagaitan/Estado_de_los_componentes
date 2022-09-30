

import {useState} from "react"
import './App.css'
import Input from "./componentes/input";
import Boton from "./componentes/Boton";

function App() {

const [nombre,setNombre] = useState("")
const [password,setPassword] = useState("")

  return (

    <main className="App">
          <div className="Card">
            <h3>Login</h3>
            <Input
            setNombre={setNombre}
            setPassword={setPassword}>
            </Input>

           <Boton 
           nombre={nombre} 
           password={password}>
          </Boton>

          </div>
    </main>
  )
}

export default App
