import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth_service";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) dispatch(login({ userData }));
        else dispatch(logout());
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {" "}
      {!loading ? (
        <div className="min-h-screen flex flex-wrap items-center justify-center bg-gray-400">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : (
        <div className="text-2xl text-white">Loading...</div>
      )}
      <Analytics />
    </>
  );
}

export default App;
