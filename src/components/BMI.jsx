import React from "react";
import { FormContainer } from "./FormContainer";

export const BMI = () => {
  return (
    <>
      <div className="w-full h-screen">
        <video
          src="./video/30356-380729027.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 h-screen w-full object-fill"
        ></video>
        <FormContainer />
      </div>
    </>
  );
};
