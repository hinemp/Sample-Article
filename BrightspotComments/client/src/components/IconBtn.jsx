import "../styles/comment.css";

const IconBtn = ({ onClick, Icon, isActive, color, children }) => {
  return (
    <button
      className={`btn icon-btn ${isActive ? "icon-btn-active" : ""} ${
        color || ""
      }`}
      onClick={onClick}
    >
      <span className={`${children != null ? "mr-1" : ""}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
};

export default IconBtn;
