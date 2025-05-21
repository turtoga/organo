import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';
import Footer from './componentes/Footer';
import { IColaborador } from './interfaces/IColaborador';


function App() {

  const [colaboradores,setColaboradores] = useState<IColaborador[]>([])

  const [time, setTime] = useState([
    {
      id: uuidv4(),
      nome:'Fortnite', 
      cor:'#82cffa'
    },
    {
      id: uuidv4(),
      nome:'Minecraft', 
      cor:'#57c278'
    },
    {
      id: uuidv4(),
      nome:"Apex", 
      cor:'#e06b69'
    },
    {
      id: uuidv4(),
      nome:"Among Us", 
      cor:'#ffba29'
    }
  ])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores,colaborador])
  }

  function deletarColaborador(id: string) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCor(cor:string,id: string) {
    setTime(time.map(time =>{
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime: {nome:string, cor:string}) {
    setTime([...time, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id:string) {
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return(colaborador)
    }))
  }

  return (
    <div className="App">
      
      <Banner enderecoImagem={"/imagens/banner.png"} textoAlternativo={"Banner principal da página do Organo"}/>
      <Formulario 
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado} 
        times={time.map(time => time.nome)}
        cadastrarTime={cadastrarTime}
      />
      {time.map(time => 
      <Time 
        aoFavoritar={resolverFavorito}
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor}
        id={time.id}
        colaboradores={colaboradores.filter(colaborador => colaborador.jogo === time.nome)}
        aoDeletar = {deletarColaborador}
        mudarCor={mudarCor}
      />)}
      <Footer/>

    </div>
  );
}

export default App;
