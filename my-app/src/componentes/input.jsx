const Input = ({setNombre,setPassword})=> {
return (
<div className="casilla">
<input type="text"placeholder="Nombre"onChange={(e)=>setNombre(e.target.value)}/>
<br />
<input type="password" placeholder="Contraseña"onChange={(e)=>setPassword(e.target.value)}/>
</div>
)

}

export default Input 