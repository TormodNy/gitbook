import axios from "axios";

function getOptions() {
  return {
    responseType: "json",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
  };
}

export async function getRequest(url) {
  return await axios
    .get(url, getOptions())
    .then((response) => response.data)
    .catch((error) => null);
}

export async function postRequest(url, data) {
  return await axios
    .post(url, data, getOptions())
    .then((response) => response.data)
    .catch((error) => null);
}
