import { ProducerAction, ProducerState } from '../types/producer'

const producer = (
  state: ProducerState = {},
  action: ProducerAction
): ProducerState => {
  switch (action.type) {
    case 'GET_PRODUCER':
      return {
        ...state,
        producers: action.producers,
      }
    case 'GET_EDIT':
      return {
        ...state,
        editProducer: action.editProducer,
      }
    case 'CLEAN_EDIT':
      delete state.editProducer
      return state
    default:
      return state
  }
}

export default producer