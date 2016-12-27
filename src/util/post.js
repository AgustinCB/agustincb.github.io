import * as api from './api'

export const all = () => {
  return api.get('/post')
}

export const view = (id) => {
  return api.get(`/post/${id}`)
}
