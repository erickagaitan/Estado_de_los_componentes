import React, { useState } from "react"


const Contador = () => {

const [ contador, setContador ] = useState(0)
    
    const aumentarEnUno = () => {
        setContador(contador +1)
    }

    return(
        <div>
            <h1>Componentes contador</h1>
            <h3>Valor del cotador: { contador }</h3>
            <button onClick={()=>aumentarEnUno()}>Aumentar en 1</button>
        </div>
    )
}

export default Contador