import axios from 'axios'
import qs from 'qs'

export const axiosClient = axios.create({
  withCredentials: true,
  baseURL: process.env.API_BASE_PATH, // env
  paramsSerializer: (params) => {
    return encodeURI(qs.stringify(params, { arrayFormat: 'repeat' }))
  }
})
