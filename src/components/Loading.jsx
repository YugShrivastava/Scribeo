import React from "react";

function Loading() {
  return (
    <div className="absolute top-50 justify-center">
        <div className="text-primary text-3xl">Loading...</div>
        <div className="loader"></div>
      </div>
  );
}

export default Loading;
