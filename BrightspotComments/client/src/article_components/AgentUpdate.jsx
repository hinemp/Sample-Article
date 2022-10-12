import "../styles/agent_update.css";

const AgentUpdate = ({ img, agent, blurb, changes }) => {
  return (
    <>
      <h4>{agent}</h4>

      <span className="box">
        <img src={img} alt="" />
        <p>{changes}</p>
      </span>
      <p>{blurb}</p>
    </>
  );
};

export default AgentUpdate;
