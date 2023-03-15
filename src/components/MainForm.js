import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import Home from "./Home";
import LoginSuccess from "./LoginSuccess"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainForm() {
  const { username, password, firstName, lastName } = useSelector((state) => {
    return {
      username: state.info.username,
      password: state.info.password,
      firstName: state.info.firstName,
      lastName: state.info.lastName,
    };
  });

  return (
    <div className="w-screen flex justify-center mt-10">
      <div className="border rounded shadow bg-gray-100 w-full sm:w-[90vw] md:w-[300px] h-[550px] mb-20">
        <BrowserRouter>
          <div className="h-[38.5px] flex flex-row justify-around">
            <Link className="w-full h-full focus:border-b-2" to="sign-up">
              <div className="flex justify-center items-center cursor-pointer w-full h-full hover:opacity-80">
                <h2>Sign up</h2>
              </div>
            </Link>
            <Link className="w-full h-full focus:border-b-2" to="login">
              <div className="flex justify-center items-center cursor-pointer w-full h-full hover:opacity-80">
                <h2>Login</h2>
              </div>
            </Link>
          </div>
          <div className="h-[511.5px] relative">
            <Routes>
              <Route
                path="/sign-up"
                element={
                  <SignUpPage
                    username={username}
                    password={password}
                    firstName={firstName}
                    lastName={lastName}
                  />
                }
              />
              <Route
                path="/login"
                element={<LoginPage username={username} password={password} />}
              />
              <Route path="" element={<Home />} />
              <Route path="/login/success" element={<LoginSuccess />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default MainForm;
