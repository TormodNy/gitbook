import { getRequest } from "./ApiUtils";

export function getPosts() {
  return getRequest('https://api.github.com/repos/tormodny/gitbookdb/issues');
}