import React from "react";
import preloader from "../../../.vs/src/assect/images/Preloader.svg";

const Preloader = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={preloader} style={({ width: "200px" }, { height: "200px" })} />
    </div>
  );
};

export default Preloader;
