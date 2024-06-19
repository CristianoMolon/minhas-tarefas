import Tarefa from '../../../components/FiltroCard/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula da ebac',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'Estudar Sass',
    descricao: 'Ver a aula da ebac',
    prioridade: 'normal',
    status: 'pendente'
  },
  {
    titulo: 'Estudar Python',
    descricao: 'Ver a aula da ebac',
    prioridade: 'urgente',
    status: 'concluída'
  }
]

const ListaDetarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDetarefas
