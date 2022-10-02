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

export async function getRequest (url, token) {
  if (!token) {
    console.warn("Token is empty.");
  }

  return await axios.get(url, getOptions(token))
    .then(response => response.data)
    .catch(error => null);
}

export async function postRequest (url, data, token) {
  if (!token) {
    console.warn("Token is empty.");
  }

  return await axios.post(url, data, getOptions(token))
    .then(response => response.data)
    .catch(error => null);
}
