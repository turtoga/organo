import './CampoTexto.css'


const CampoTexto = (props) => {
    

    const placeholderMod = `${props.placeholder}...`


    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderMod} value={props.valor}></input>
        </div>
    )

}

export default CampoTexto