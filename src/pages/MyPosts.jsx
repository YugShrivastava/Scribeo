import React, { useEffect, useState } from "react";
import storageService from "../appwrite/config";
import authService from "../appwrite/authService";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PostCard } from "../components";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  const session = useSelector((state) => state.auth.session);

  useEffect(() => {
    storageService
      .getPosts()
      .then((posts) => {
        setPosts(posts.documents);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="w-full py-6">
      <div className="w-full py-4 lg:px-12 sm:px-10 p-5  flex flex-wrap items-baseline justify-baseline ">
        {posts.length !== 0 ? (
          posts.map((post) =>
            post.userId === session.session.$id ? (
              <div
                key={post.$id}
                className="md:p-4 p-2  w-full xs md:w-1/4 sm:w-1/3"
              >
                <PostCard post={post} />
              </div>
            ) : null
          )
        ) : (
          <div className="text-secondary font-light text-xl text-center mt-8 w-full">
            No posts yet!!!{" "}
            <span>
              <Link
                to={"/add-post"}
                className="underline font-normal hover:text-gray-300"
              >
                Add a post
              </Link>{" "}
              yourself
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPosts;
