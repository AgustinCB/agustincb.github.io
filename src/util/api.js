import request from 'superagent'
import path from 'path'
import config from '../../config.json'

const promisifyRequest = (req) => {
  return new Promise ((resolve, reject) => {
    req.end((err, res) => {
      if (err) return reject(err)
      resolve(res)
    })
  })
}

export const get = (pathname, params = {}) => {
  const url = path.join(config.api, pathname)
  console.log(config, url, pathname)
  return promisifyRequest(request.get(url).query(params))
}

export const post = (pathname, data = {}) => {
  const url = path.join(config.api, pathname)
  return promisifyRequest(request.post(url).send(data))
}

export const put = (pathname, data = {}) => {
  const url = path.join(config.api, pathname)
  return promisifyRequest(request.put(url).send(data))
}

export const del = (pathname, params = {}) => {
  const url = path.join(config.api, pathname)
  return promisifyRequest(request.del(url).query(params))
}
