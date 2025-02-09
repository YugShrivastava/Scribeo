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
    <div className="flex card-bg flex-col items-center justify-center w-full py-16 bg-gray-50 min-h-screen">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Welcome to Scribeo!
        </h1>
        <p className="text-lg text-secondary mb-6">
          Discover insightful posts and share your own thoughts with a vibrant community.
        </p>
        <Link
          to={"/login"}
          className="text-secondary bg-primary hover:bg-primary-dark font-medium py-3 px-6 rounded-full text-lg transition-colors"
        >
          Log In to Join the Conversation
        </Link>
        <div className="mt-8 text-secondary">
          <h2 className="text-2xl font-semibold mb-2">Why Join Us?</h2>
          <ul className="list-disc list-inside">
            <li>Engage with a community of passionate readers and writers.</li>
            <li>Read insightful blogs on a wide range of topics.</li>
            <li>Share your own stories, ideas, and experiences.</li>
          </ul>
        </div>
        <div className="mt-12 text-sm text-gray-500">
          <p>
            Don’t have an account yet?{" "}
            <Link
              to="/signup"
              className="text-primary underline font-medium hover:text-primary-dark"
            >
              Sign up here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
