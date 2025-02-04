import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function Postcard({ $id, title, featured_image }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl  bg-gray-100 p-4">
        <img
          src={appwriteService.getFilePreview(featured_image)}
          alt={title}
          className="rounded-xl"
        />
        <div className="w-full justify-center mb-4">  </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default Postcard;
