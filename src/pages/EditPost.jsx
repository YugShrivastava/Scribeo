import React, { useEffect, useState } from "react";
import { PostForm } from "../components";
import storageService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      storageService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="w-full flex justify-center mt-10">
      <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost;
