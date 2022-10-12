import { useState } from "react";
import "../styles/map_update.css";

const MapUpdate = ({ before, after, location, description }) => {
  const [isBefore, setIsBefore] = useState(true);

  return (
    <>
      <div className="map_box">
        <span>
          <button onClick={() => setIsBefore((prev) => !prev)}>
            {`${location} ${isBefore ? "Before" : "After"}`}
          </button>
        </span>
        <img src={isBefore ? before : after} alt="" />
        <p>{description}</p>
      </div>
      <div class="divider div-transparent"></div>
    </>
  );
};

export default MapUpdate;
