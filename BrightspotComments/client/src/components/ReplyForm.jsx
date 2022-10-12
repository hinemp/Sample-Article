import { useState } from "react";
import { postComment } from "../services/comments";

/**
 * TODO: Implement some kind of error notification
 * @returns A Comment Form field designed to input a root comment into the board
 */
const ReplyForm = ({
  setCommentCount,
  setIsReplying,
  parent_id,
  autoFocus = false,
  initialValue = "",
}) => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState(initialValue);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`${user} replied "${message}" to ${parent_id}`);
    await postComment(user ? user : "Anonymous", message, parent_id);
    setMessage("");
    setUser("");
    setCommentCount(Math.random());
    setIsReplying(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-row">
        <textarea
          autoFocus={autoFocus}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message-input"
          placeholder="Begin typing here..."
        />
        <textarea
          autoFocus={autoFocus}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="user-input"
          placeholder="Username"
        />
        <button className="btn" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default ReplyForm;
