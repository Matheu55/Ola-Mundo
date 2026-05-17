import './App.css'
import Rodape from './componentes/rodape/rodape'
import Banner from './componentes/banner/banner'    
import Menu from './componentes/menu/menu'  
import Projetos from './componentes/projetos/projetos'

function App() {


  return (
    <>
      <Menu />
      <Banner></Banner>
      <Projetos></Projetos>
      <Rodape></Rodape>
    </>
  )
}

export default App
