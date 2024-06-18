import EstiloGlobal, { Container } from './Styles'
import BarraLateral from './containers/BarraLateral'
import ListaDetarefas from './containers/BarraLateral/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDetarefas />
      </Container>
    </>
  )
}

export default App
