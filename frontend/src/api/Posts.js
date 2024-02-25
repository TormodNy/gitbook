import { getRequest, patchRequest, postRequest } from "./ApiUtils";

export async function getPosts() {
  return await getRequest(
    "https://localhost/api/repos/tormodny/gitbookdb/issues"
  );
}

export async function postPost(title, body) {
  return await postRequest(
    "https://localhost/api/repos/tormodny/gitbookdb/issues",
    {
      title,
      body,
    }
  );
}

export async function patchPost(post, title, body) {
  return await patchRequest(
    `https://localhost/api/repos/tormodny/gitbookdb/issues/${post.number}`,
    {
      title,
      body,
    }
  );
}

export async function getComments(post) {
  return await getRequest(
    `https://localhost/api/repos/tormodny/gitbookdb/issues/${post.number}/comments`
  );
}

export async function postComments(post, body) {
  return await postRequest(
    `https://localhost/api/repos/tormodny/gitbookdb/issues/${post.number}/comments`,
    { body }
  );
}

export async function patchComment(comment, body) {
  return await patchRequest(
    `https://localhost/api/repos/tormodny/gitbookdb/issues/comments/${comment.id}`,
    { body }
  );
}

export async function postPostReaction(post, reaction) {
  return await postRequest(
    `https://localhost/api/repos/tormodny/gitbookdb/issues/${post.number}/reactions`,
    { content: reaction }
  );
}
