import './Campo.css'

const Campo = ({type='text', label, placeholder, valor, aoAlterado, obrigatorio =false}) => {
    

    const placeholderMod = `${placeholder}...`


    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
    }
    
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input type={type} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderMod} value={valor}></input>
        </div>
    )

}

export default Campo