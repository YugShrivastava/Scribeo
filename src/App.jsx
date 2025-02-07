import { Analytics } from "@vercel/analytics/react";
import ThemeSwitch from "./components/ThemeSwitch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/authService";
import { Outlet } from "react-router-dom";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((session) => {
        if (session) {
          dispatch(login({ session }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(error);
      })
<<<<<<< HEAD
=======
      .catch((error) => {})
>>>>>>> main
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return (
<<<<<<< HEAD
    <div className="background-primary w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full h-screen flex flex-col items-center">
        {loading ? (
          <p className="text-primary text-2xl">Loading...</p>
        ) : (
          <>
            <ThemeSwitch />
            <Header />
            <main className="flex flex-grow lg:w-[85%] w-full justify-center">
              <Outlet />
            </main>
            <Footer />
          </>
        )}
        {/* <Analytics /> unmark this comment after completing the project */}
      </div>
    </div>
=======
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
>>>>>>> main
  );
}

export default App;
