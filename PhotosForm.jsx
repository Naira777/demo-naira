import React from "react";

const PhotosForm = (props) => {
  const onPhotoSelected1 = (e) => {
    if (e.target.files.length > 0) {
      let file1 = URL.createObjectURL(e.target.files[0]);
      props.savePhotoSuccess1(file1);
    }
  };

  const onPhotoSelected2 = (e) => {
    if (e.target.files.length > 0) {
      let file2 = URL.createObjectURL(e.target.files[0]);

      props.savePhotoSuccess2(file2);
    }
  };

  const onPhotoSelected3 = (e) => {
    if (e.target.files.length > 0) {
      let file3 = URL.createObjectURL(e.target.files[0]);
      props.savePhotoSuccess3(file3);
    }
  };

  return (
    <>
      <h2> Add Your Photos</h2>

      <div> {<input type={"file"} onChange={onPhotoSelected1} />} </div>

      <div> {<input type={"file"} onChange={onPhotoSelected2} />} </div>

      <div> {<input type={"file"} onChange={onPhotoSelected3} />} </div>

      <button onClick={props.deactivateEditMode}> Save </button>
    </>
  );
};

export default PhotosForm;
