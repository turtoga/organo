import './listaSuspensa.css'

interface ListaSuspendaProps {
    label: string
    aoAlterado:(valor:string) => void
    obrigatorio?:boolean
    valor: string
    itens: string[]
}

const ListaSuspensa = (props : ListaSuspendaProps) => {
    
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={e => props.aoAlterado(e.target.value)}>   
                <option value=''></option> 
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa