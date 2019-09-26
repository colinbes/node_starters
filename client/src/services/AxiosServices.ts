import Axios, { AxiosRequestConfig, Method } from 'axios'

export function axiosRequest (url: string, method: Method, body?: any, headers?: any): AxiosRequestConfig {
  var config: AxiosRequestConfig = {
    // baseURL: 'http://127.0.0.1:8080/',
    url: url,
    method: method,
    data: JSON.stringify(body),
    headers: headers || {},
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN'
  }
  if (typeof config.headers['Content-Type'] === 'undefined') {
    config.headers['Content-Type'] = 'application/json'
  }
  return config
}

function axiosGet (url: string, body?: any, headers?: any) {
  console.log('axiosGet')
  return axiosRequest(url, 'GET', body, headers)
}

function axiosPut (url: string, body?: any, headers?: any) {
  console.log('axiosPut')
  return axiosRequest(url, 'PUT', body, headers)
}

function axiosPost (url: string, body?: any, headers?: any) {
  console.log('axiosPost')
  return axiosRequest(url, 'POST', body, headers)
}

export async function getUsername () {
  let uri = 'api/username'
  let req = axiosGet(uri)
  let response = await Axios(req)
  return response.data
}
