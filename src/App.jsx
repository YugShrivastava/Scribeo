import { Analytics } from "@vercel/analytics/react";
import ThemeSwitch from "./components/ThemeSwitch";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/authService";
import { Outlet } from "react-router-dom";
import { login, logout } from "./features/authSlice";
import { Footer, Header, Loading } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((session) => {
        if (session) {
          dispatch(login(session));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        // console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loading]);

  return (
    <div className="background-primary w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full h-screen flex flex-col items-center">
        <ThemeSwitch loading={loading} />
        {loading ? (
          <Loading />
) : (
          <>
            <Header />
            <main className="flex flex-grow lg:w-[85%] w-full justify-center">
              <Outlet />
            </main>
            <Footer />
          </>
        )}
        <Analytics />
      </div>
    </div>
  );
}

export default App;
