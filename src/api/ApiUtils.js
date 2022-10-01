import axios from "axios";

export function getRequest (url) {
  return axios({
    method: 'get',
    url,
    responseType: 'json'
  }).then(response => response.data);
}