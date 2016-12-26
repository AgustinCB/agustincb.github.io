import * as api from './api'

export const all = () => {
  return api.get('/post')
}
