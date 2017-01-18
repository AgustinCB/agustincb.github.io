import * as api from './api'

export const all = (page = 0) => {
  return api.get(`/post?page=${page}`)
}

export const view = (id) => {
  return api.get(`/post/${id}`)
}

export const search = (term, page = 0) => {
  return api.get(`/search/${encodeURIComponent(term)}?page=${page}`)
}
