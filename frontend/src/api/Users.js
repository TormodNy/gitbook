import { getRequest } from "./ApiUtils";

const host = window.location.hostname;

export async function getUser() {
  return await getRequest(`https://${host}/api/user`);
}
