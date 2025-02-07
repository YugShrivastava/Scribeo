import React from "react";
import { Link } from "react-router-dom";
import storageService from "../appwrite/config";

function PostCard({ post }) {
  return (
    <Link to={`/post/${post.$id}`} ><div className="whitespace-nowrap overflow-ellipsis overflow-hidden w-full p-4 flex flex-col gap-2 border rounded-sm shadow-accent card-bg hover:scale-105 transition-transform duration-200 ease-in-out">
      <img src={`${storageService.getFilePreview(post.image)}`} alt={post.tile} className="rounded-sm" />
      <h3 className="text-xl text-primary">{post.title}</h3>
    </div>
    </Link>
  );
}

export default PostCard;
