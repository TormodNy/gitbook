import axios from "axios";

export function getRequest (url) {
  return axios.get(url, {
    responseType: 'json',
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }
  })
    .then(response => response.data);
}

export function postRequest (url, data, token) {
  return axios.post(url, data, {
    responseType: 'json',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`
    }
  })
  .then(response => response.data);
}
