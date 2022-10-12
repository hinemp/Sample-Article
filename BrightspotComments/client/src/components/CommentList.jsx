import Comment from "./Comment";

const CommentList = ({ comments, relation, setCommentCount }) => {
  if (comments == null) return;
  return comments.map((comment) => (
    <div key={comment.id}>
      <Comment
        comment={comment}
        relation={relation}
        setCommentCount={setCommentCount}
      />
    </div>
  ));
};

export default CommentList;
