import React from "react";
import { useState } from "react";
import PhotosDisplay from './PhotosDisplay';
import PhotosForm from "./PhotosForm";

const Photos = (props) => {
 let [editMode, setEditMode] = useState(false);

  return (
    <>
      {!editMode ? (
        <PhotosDisplay
          goToEditMode={() => {
            setEditMode(true);
          }}
          photo1={props.photo1}
          photo2={props.photo2}
          photo3={props.photo3}
        />
      ) : (
        <PhotosForm
          savePhotoSuccess1={props.savePhotoSuccess1}
          savePhotoSuccess2={props.savePhotoSuccess2}
          savePhotoSuccess3={props.savePhotoSuccess3}
          deactivateEditMode={() => {
            setEditMode(false);
          }}
        />
      )}
    </>
  );
};

export default Photos;


