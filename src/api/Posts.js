import { getRequest, postRequest } from "./ApiUtils";

export function getPosts() {
  return getRequest('https://api.github.com/repos/tormodny/gitbookdb/issues');
}

export function postPost(title, body, token) {
  return postRequest('https://api.github.com/repos/tormodny/gitbookdb/issues', {
    title,
    body,
  }, token);
}

export function getComments(post) {
  return getRequest(`https://api.github.com/repos/tormodny/gitbookdb/issues/${post.number}/comments`);
}