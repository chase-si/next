import axios from 'axios'

const baseURL = 'https://webcdn.17app.co/campaign/pretest/data.json'

const defaultOptions = {
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const Request = axios.create({
  baseURL,
  ...defaultOptions
})

