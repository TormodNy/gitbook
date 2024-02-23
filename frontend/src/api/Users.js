import { getRequest } from "./ApiUtils";

export async function getUser() {
  return await getRequest('https://localhost/api/user');
}