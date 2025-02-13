import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import storageService from "../appwrite/config";
import { Button, Loading } from "../components";
import parse from "html-react-parser";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);

  const session = useSelector((state) => state.auth.session);

  const isAuthor = post && session ? post.userId === session.$id : false;

  useEffect(() => {
    if (slug) {
      storageService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
            setLoader(false);
          } else navigate("/");
        })
        .catch((error) => {});
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const deletePost = () => {
    setLoading(true);
    storageService
      .deletePost(post.$id)
      .then((status) => {
        if (status) {
          storageService.deleteFile(post.image);
          navigate("/");
        }
      })
      .catch((error) => {});
    setLoading(false);
  };

  return loader ? (
    <Loading />
  ) : post ? (
    <div className="w-full flex flex-col items-center px-10">
      <div className="flex flex-col items-baseline my-14 gap-5 py-4 px-10 border card-bg shadow rounded-md">
        {isAuthor ? (
          <div className="flex flex-wrap gap-4 self-end">
            <Button
              text="Edit"
              onClick={() => {
                navigate(`/edit-post/${post.$id}`);
              }}
            />
            <Button
              className="relative"
              text="Delete"
              onClick={deletePost}
              loading={loading}
            />
          </div>
        ) : null}
        <div>
          <img
            src={storageService.getFullFilePreview(post.image)}
            alt="Post Image"
            className="rounded-md"
          />
        </div>
        <div className="text-3xl font-semibold text-primary">{post.title}</div>
        <div className="text-primary">{parse(post.content)}</div>
      </div>
    </div>
  ) : null;
}

export default Post;
