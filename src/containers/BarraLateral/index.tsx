import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../Store'
import { alteraTermo } from '../../Store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluídas" contador={3} />
          <FiltroCard legenda="urgentes" contador={0} />
          <FiltroCard legenda="importantes" contador={3} />
          <FiltroCard legenda="normal" contador={1} />
          <FiltroCard legenda="todas" contador={4} ativo />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}
export default BarraLateral
