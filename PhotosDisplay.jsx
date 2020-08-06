import React from "react";
import s from "./PhotosContainer.module.css";

const PhotosDisplay = (props) => {
  return (
    <div>
      <div>
        <h2> My Photos </h2>
      </div>

      {
        <div>
          <button onClick={props.goToEditMode}> Edit </button>
        </div>
      }

      <div className="d-flex bd-highlight example-parent">
        <div className="p-2 flex bd-highlight col-example">
          <img src={props.photo1} className={s.photos} />
        </div>

        <div className="p-2 flex bd-highlight col-example">
          <img src={props.photo2} className={s.photos} />
        </div>

        <div className="p-2 flex bd-highlight col-example">
          <img src={props.photo3} className={s.photos} />
        </div>
      </div>
    </div>
  );
};

export default PhotosDisplay;
