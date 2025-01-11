import Colaborador from '../colaborador'
import './time.css'

const Time = (props) => {

    const css = {backgroundColor: props.corSecundaria, backgroundImage: 'url(/imagens/fundo.png)'} 

    return (
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => { 
                    return <Colaborador key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corFundo={props.corPrimaria} aoDeletar={props.aoDeletar}/>
                    })}
            </div>  
        </section>
        : ""
    )

}

export default Time