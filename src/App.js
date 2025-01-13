import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [colaboradores,setColaboradores] = useState([])

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

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCor(cor,id) {
    setTime(time.map(time =>{
      if(time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function cadastrarTime(novoTime) {
    setTime([...time, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador =>{
      if(colaborador.id === id) {
        colaborador.favorito = !colaborador.favorito
      }
      return(colaborador)
    }))
  }

  return (
    <div className="App">
      
      <Banner/>
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
