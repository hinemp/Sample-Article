import axios from "axios";
const URL = "http://localhost:3001/comments";

export async function getComments() {
  const res = await axios.get(`${URL}`);
  return res.data;
}

export const postComment = async (user, message, parent = null) => {
  await axios.post(`${URL}`, {
    user: user,
    comment_text: message,
    parent_id: parent,
  });
  return true;
};

export const softDeleteComment = async (id) => {
  await axios.patch(`${URL}/${id}`);
  return true;
};

export const hardDeleteComment = async (id) => {
  await axios.delete(`${URL}/${id}`);
  return true;
};

export const likeComment = async (id) => {
  console.log("Triggered like");
  return await axios.post(`${URL}/like/${id}`);
};

export const dislikeComment = async (id) => {
  console.log("triggered dislike");
  return await axios.post(`${URL}/dislike/${id}`);
};

export default { getComments, postComment, softDeleteComment };
