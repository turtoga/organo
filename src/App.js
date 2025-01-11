import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Footer from './componentes/Footer';


function App() {

  const [colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores,colaborador])
  }

  const time = [
    {
      nome:'Fortnite', 
      corPrimaria:'#82cffa', 
      corSecundaria:'#e8f8ff'
    },
    {
      nome:'Minecraft', 
      corPrimaria:'#57c278', 
      corSecundaria:'#d9f7e9'
    },
    {
      nome:"Apex", 
      corPrimaria:'#e06b69', 
      corSecundaria:'#fde7e8'
    },
    {
      nome:"Among Us", 
      corPrimaria:'#ffba29', 
      corSecundaria:'#ffeedf'
    }
  ]

  return (
    <div className="App">
      
      <Banner/>
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} times={time.map(time => time.nome)}/>
      {time.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.jogo === time.nome)}
      />)}
      <Footer/>

    </div>
  );
}

export default App;
