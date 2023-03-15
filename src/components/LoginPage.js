import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUsername, changePassword } from "../store";
import Input from "./Input";
import LoginCheck from "./LoginCheck";

function LoginPage({ username, password }) {
  const dispatch = useDispatch();

  const [usernamePlaceholder, setUsernamePlaceholder] = useState("User Name");

  const [passPlaceholder, setPassPlaceholder] = useState("Password");

  // console.log(username, password, data);

  const handleUser = (event) => {
    dispatch(changeUsername(event.target.value));
  };

  const handlePassword = (event) => {
    dispatch(changePassword(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="h-full w-full pt-20 absolute flex flex-col justify-start items-center"
      onSubmit={handleSubmit}
    >
      <Input
        label="Username"
        handle={handleUser}
        value={username}
        placeholder={usernamePlaceholder}
        setPlace={setUsernamePlaceholder}
      />
      <Input
        label="Password"
        handle={handlePassword}
        value={password}
        placeholder={passPlaceholder}
        setPlace={setPassPlaceholder}
      />
      <div className="mb-10 grid">
        <LoginCheck
          username={username}
          password={password}
          dispatch={dispatch}
          type="login"
        />
      </div>
    </form>
  );
}

export default LoginPage;
