const Boton = ({nombre,password})=> {
    const handleLogin = ()=>alert('"Ingresando"...')
    return (
    <div>
    <button className={ nombre && password === "252525" ? "" : "disabled" }
    
     onClick={()=> handleLogin()}>
           
    Ingresar
    </button>
    
    </div>
    )
    
    }
    
    export default Boton