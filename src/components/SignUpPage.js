import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUsername,
  changePassword,
  changeFirstName,
  changeLastName,
} from "../store";
import Input from "./Input";
import Check from "./Check";

function SignUpPage({ username, password, firstName, lastName }) {
  const dispatch = useDispatch();

  const [firstnamePlaceholder, setFirstnamePlaceholder] =
    useState("First Name");
  const [usernamePlaceholder, setUsernamePlaceholder] = useState("User Name");
  const [lastnamePlaceholder, setLastnamePlaceholder] = useState("Last Name");
  const [passPlaceholder, setPassPlaceholder] = useState("Password");

  // console.log(username, password, data);

  const handleUser = (event) => {
    dispatch(changeUsername(event.target.value));
  };

  const handlePassword = (event) => {
    dispatch(changePassword(event.target.value));
  };
  const handleFirstName = (event) => {
    dispatch(changeFirstName(event.target.value));
  };
  const handleLastName = (event) => {
    dispatch(changeLastName(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="h-full w-full pt-8 absolute flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <Input
        label="First Name"
        handle={handleFirstName}
        value={firstName}
        placeholder={firstnamePlaceholder}
        setPlace={setFirstnamePlaceholder}
      />
      <Input
        label="Last Name"
        handle={handleLastName}
        value={lastName}
        placeholder={lastnamePlaceholder}
        setPlace={setLastnamePlaceholder}
      />
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
        <Check
          type="sign-up"
          username={username}
          password={password}
          firstName={firstName}
          lastName={lastName}
          dispatch={dispatch}
        />
      </div>
    </form>
  );
}

export default SignUpPage;
