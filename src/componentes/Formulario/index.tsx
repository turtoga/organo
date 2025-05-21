import { IColaborador } from "../../interfaces/IColaborador";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../listaSuspensa";
import "./Formulario.css";
import {useState} from 'react'
import { v4 as uuidv4 } from "uuid";


interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  cadastrarTime: (time: {nome:string, cor:string}) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [jogo, setJogo] = useState('') 
  const [id, setID] = useState('') 
  const [favorito, setFavorito] = useState(false) 

  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')


  const aoSalvar = (evento:React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    setID(uuidv4())
    setFavorito(false)

    props.aoColaboradorCadastrado({
      nome, cargo, imagem, jogo, id, favorito
    })
    setNome('')
    setCargo('')
    setImagem('')
    setJogo('')
  }

  const aoNovoTime = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.cadastrarTime({nome: nomeTime, cor: corTime})
    setNomeTime('')
    setCorTime('')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor ={nome} aoAlterado={valor => setNome(valor)}/>
        <Campo obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor ={cargo} aoAlterado={valor => setCargo(valor)}/>
        <Campo label="Imagem" placeholder="Digite o endereço da imagem" valor ={imagem} aoAlterado={valor => setImagem(valor)}/>
        <ListaSuspensa obrigatorio={true} label="Jogo" itens={props.times} valor ={jogo} aoAlterado={valor => setJogo(valor)} />
        <Botao>
          Criar Card
        </Botao>
      </form>
      <form onSubmit={aoNovoTime}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo obrigatorio label="Nome" placeholder="Digite o nome do time" valor ={nomeTime} aoAlterado={valor => setNomeTime(valor)}/>
        <Campo obrigatorio type="color" label="Cor" placeholder="Digite a cor do time" valor ={corTime} aoAlterado={valor => setCorTime(valor)}/>

        <Botao>
          Criar um novo time
        </Botao>
      </form>

    </section>
  );
};

export default Formulario;
