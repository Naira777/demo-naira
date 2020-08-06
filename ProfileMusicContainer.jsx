import React, { useState } from "react";



const ProfileMusicPage = () => {
  return (
    <div>
      <div>
        <h2> Here is my favorite music!!!</h2>
      </div>

      <div>
        
        <div><b> 1. </b> </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e1uqfO2-oJA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div>
      <div><b> 2. </b> </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/D67lR7Qy_wk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div>
      <div><b> 3. </b> </div>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oHs98TEYecM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};


export default ProfileMusicPage;