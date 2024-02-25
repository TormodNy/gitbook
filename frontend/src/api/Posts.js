import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "./ApiUtils";

const host = window.location.hostname;

export async function getPosts() {
  return await getRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues`
  );
}

export async function postPost(title, body) {
  return await postRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues`,
    {
      title,
      body,
    }
  );
}

export async function patchPost(post, title, body) {
  return await patchRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}`,
    {
      title,
      body,
    }
  );
}

export async function getComments(post) {
  return await getRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}/comments`
  );
}

export async function postComments(post, body) {
  return await postRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}/comments`,
    { body }
  );
}

export async function patchComment(comment, body) {
  return await patchRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/comments/${comment.id}`,
    { body }
  );
}

export async function getPostReactions(post) {
  return await getRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}/reactions`
  );
}

export async function postPostReaction(post, reaction) {
  return await postRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}/reactions`,
    { content: reaction }
  );
}

export async function deletePostReaction(post, reaction) {
  return await deleteRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/${post.number}/reactions/${reaction.id}`
  );
}

export async function getCommentReactions(comment) {
  return await getRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/comments/${comment.id}/reactions`
  );
}

export async function postCommentReaction(comment, reaction) {
  return await postRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/comments/${comment.id}/reactions`,
    { content: reaction }
  );
}

export async function deleteCommentReaction(comment, reaction) {
  return await deleteRequest(
    `https://${host}/api/repos/tormodny/gitbookdb/issues/comments/${comment.id}/reactions/${reaction.id}`
  );
}
