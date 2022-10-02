import axios from "axios";

function getOptions (token) {
  return {
    responseType: 'json',
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      'Authorization': `token ${token}`,
    },
  };
}

export async function checkRequest (url, token) {
  if (!token) {
    console.warn("Token is empty.");
  }

  return await axios.get(url, {
    ...getOptions(token),
    validateStatus: (status) => status < 500,
  })
    .then(response => response.status === 200)
    .catch(error => console.log(error));
}

export function getRequest (url, token) {
  if (!token) {
    console.warn("Token is empty.");
  }

  return axios.get(url, getOptions(token))
    .then(response => response.data);
}

export function postRequest (url, data, token) {
  if (!token) {
    console.warn("Token is empty.");
  }

  return axios.post(url, data, getOptions(token))
    .then(response => response.data);
}
