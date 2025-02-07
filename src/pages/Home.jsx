import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import storageService from "../appwrite/config";
import { PostCard } from "../components";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    storageService
      .getPosts()
      .then((posts) => {
        setPosts(posts.documents);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return authStatus ? (
    <div className="w-full py-8">
      <div className="w-full py-4 lg:px-12 px-10 flex flex-wrap items-start justify-baseline ">
        {posts.length !== 0 ? (
          posts.map((post) =>
            post.status === "active" ? (
              <div key={post.$id} className="md:p-4 p-2 xs w-full md:w-1/4 sm:w-1/3">
                <PostCard post={post} />
              </div>
            ) : null
          )
        ) : (
          <div className="text-secondary font-light text-xl text-center mt-8 w-full">
            No posts yet!!!{" "}
            <span>
              <Link
                to={"add-post"}
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
  ) : (
    <div className="text-secondary text-2xl mt-14">
      <p>
        <span className="text-primary underline">
          <Link to={"/login"}>Login</Link>
        </span>{" "}
        to see blogs
      </p>
      <h2 className="text-red-500 text-2xl mt-8">
        I am thinking about making this the landing page and overview about the
        website!!
      </h2>
    </div>
  );
}

export default Home;
