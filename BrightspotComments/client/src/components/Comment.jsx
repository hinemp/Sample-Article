import { useState } from "react";
import { FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa";
import {
  dislikeComment,
  hardDeleteComment,
  likeComment,
} from "../services/comments";
import "../styles/comment.css";
import CommentList from "./CommentList";
import IconBtn from "./IconBtn";
import ReplyForm from "./ReplyForm";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

const Comment = ({ comment, relation, setCommentCount }) => {
  // // Get all children from relation
  let children = [];
  if (comment.id in relation) children = relation[comment.id];

  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  async function deleteHandler(e) {
    await hardDeleteComment(comment.id);
    setCommentCount((prev) => prev - 1);
  }

  async function likeHandler(e) {
    isLiked ? await dislikeComment(comment.id) : await likeComment(comment.id);
    setIsLiked((prev) => !prev);
    setCommentCount((prev) => prev - 1);
  }

  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">{comment.user}</span>
          <span className="date">
            {dateFormatter.format(Date.parse(comment.createdAt))}
          </span>
        </div>
        <div className="message">{comment.comment_text}</div>
        <div className="footer">
          <IconBtn
            onClick={(e) => likeHandler(e)}
            Icon={isLiked ? FaHeart : FaRegHeart}
            aria-label="Like"
          >
            {comment.likes}
          </IconBtn>
          <IconBtn
            onClick={() => setIsReplying((prev) => !prev)}
            isActive={isReplying}
            Icon={FaReply}
            aria-label={isReplying ? "Cancel Reply" : "Reply"}
          />
          <IconBtn
            onClick={(e) => deleteHandler(e)}
            Icon={FaTrash}
            aria-label="Delete"
            color={"danger"}
          />
        </div>
      </div>
      {isReplying && (
        <div className="mt-1 ml-3">
          <ReplyForm
            autoFocus={true}
            parent_id={comment.id}
            setCommentCount={setCommentCount}
            setIsReplying={setIsReplying}
          ></ReplyForm>
        </div>
      )}
      {children?.length > 0 && (
        <>
          <div className={`nest-com-stack ${areChildrenHidden ? "hide" : ""}`}>
            <button
              className="collapse-line"
              aria-label="Hide Replies"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="nested-comments">
              <CommentList
                comments={children}
                relation={relation}
                key={comment.id}
                setCommentCount={setCommentCount}
              ></CommentList>
            </div>
          </div>
          <button
            className={`btn mt-1 ${!areChildrenHidden ? "hide" : ""}`}
            onClick={() => setAreChildrenHidden(false)}
          >
            Show Replies
          </button>
        </>
      )}
    </>
  );
};

export default Comment;
