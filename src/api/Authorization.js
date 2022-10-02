import { checkRequest } from "./ApiUtils";

export async function getTokenValidity(token) {
  return await checkRequest('https://api.github.com', token);
}