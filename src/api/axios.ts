import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://us-central1-antikvariatru-57a0d.cloudfunctions.net',
})
