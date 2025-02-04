import React from "react";
import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostForm } from "../components";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      const post = appwriteService
        .getPost(slug)
        .then((post) => {
          setPost(post);
        })
        .catch((err) => {});
    }
    else{
      navigate('/')
    }
  }, [slug, navigate]);

  return post ? (
      <div className="py-8">
        <Container>
          <PostForm post={post} />
        </Container>
      </div>
  ) : null
}

export default EditPost;
