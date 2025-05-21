import { IColaborador } from '../../interfaces/IColaborador';
import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    cor:string
    nome: string
    colaboradores: IColaborador[]
    id:string
    mudarCor: (valor:string, id: string) => void
    aoFavoritar: (id:string) => void
    aoDeletar: (id:string) => void
}

const Time = (props : TimeProps) => {
    
    const css = {backgroundColor:hexToRgba(props.cor, '0.6'), backgroundImage: 'url(/imagens/fundo.png)'} 

    return (
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor'/>
            <h3 style={{borderColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => { 
                    return <Colaborador key={indice} colaborador={colaborador}  corFundo={props.cor} aoDeletar={props.aoDeletar} aoFavoritar={props.aoFavoritar}/>
                    })}
            </div>  
        </section>
        : <></>
    )

}

export default Time