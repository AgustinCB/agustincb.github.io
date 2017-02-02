import * as api from './api'

export const all = () => {
  return api.get(`/globals`)
}

export const get = (id) => {
  return api.get(`/globals/${id}`)
}
