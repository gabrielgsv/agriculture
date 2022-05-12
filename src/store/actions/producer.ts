import api from '../../services/api'
import { DispatchGetEditType, DispatchType } from '../types/producer'

export function getProducers() {
  return function (dispatch: DispatchType) {
    api
      .get(`producer`)
      .then(res => {
        const result = res.data
        dispatch({
          type: 'GET_PRODUCER',
          producers: result,
        })
      })
      .catch((err) => {
        throw err
      })
  }
}

export function getEdit(idEdit: string) {
  return function (dispatch: DispatchGetEditType) {
    api
      .get(`producer?id=${idEdit}`)
      .then(res => {
        const result = res.data
        dispatch({
          type: 'GET_EDIT',
          editProducer: result,
        })
      })
      .catch((err) => {
        throw err
      })
  }
}


export function cleanEdit() {
  return function (dispatch: any) {
    dispatch({
      type: 'CLEAN_EDIT',
    })
  }
}