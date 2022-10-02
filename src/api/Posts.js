import { getRequest, postRequest } from "./ApiUtils";

export async function getPosts(token) {
  return await getRequest('https://api.github.com/repos/tormodny/gitbookdb/issues', token);
}

export async function postPost(title, body, token) {
  return await postRequest('https://api.github.com/repos/tormodny/gitbookdb/issues', {
    title,
    body,
  }, token);
}

export async function getComments(post, token) {
  return await getRequest(`https://api.github.com/repos/tormodny/gitbookdb/issues/${post.number}/comments`, token);
}

export async function postComments(post, body, token) {
  return await postRequest(`https://api.github.com/repos/tormodny/gitbookdb/issues/${post.number}/comments`, {body}, token);
}

