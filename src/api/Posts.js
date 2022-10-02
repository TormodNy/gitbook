import { getRequest, postRequest } from "./ApiUtils";

export function getPosts(token) {
  return getRequest('https://api.github.com/repos/tormodny/gitbookdb/issues', token);
}

export function postPost(title, body, token) {
  return postRequest('https://api.github.com/repos/tormodny/gitbookdb/issues', {
    title,
    body,
  }, token);
}

export function getComments(post, token) {
  return getRequest(`https://api.github.com/repos/tormodny/gitbookdb/issues/${post.number}/comments`, token);
}

export function postComments(post, body, token) {
  return postRequest(`https://api.github.com/repos/tormodny/gitbookdb/issues/${post.number}/comments`, {body}, token);
}

