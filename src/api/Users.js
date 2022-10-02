import { getRequest } from "./ApiUtils";

export async function getUser(token) {
  return await getRequest('https://api.github.com/user', token);
}