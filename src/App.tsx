import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './Styles'
import BarraLateral from './containers/BarraLateral'
import ListaDetarefas from './containers/BarraLateral/ListaDeTarefas'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDetarefas />
      </Container>
    </Provider>
  )
}

export default App
