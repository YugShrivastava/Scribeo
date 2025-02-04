import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth_service";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

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
      .catch((error) => console.log("Error in loading useEffect"))
      .finally(() => {
        setLoading(false);
      });
  }, []);

      return !loading ? (
        <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : (
      <div className="text-2xl text-white">Loading...</div>)
}

export default App;
