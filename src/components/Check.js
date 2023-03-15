import { clearState, useAddUserMutation } from "../store";
import { useValid } from "../hooks/use-valid";
import { useState } from "react";

function Check({ username, password, firstName, lastName, dispatch }) {
  const { data, error, isFetching } = useValid(username);
  const [addUser, results] = useAddUserMutation();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    if (
      data.length === 0 &&
      username.length >= 6 &&
      password.length >= 8 &&
      firstName.length !== 0 &&
      lastName !== 0
    ) {
      addUser({ username, password, firstName, lastName });
      dispatch(clearState());
      setMessage("Success");
      setShowMessage(true);
    } else {
      let text =
        (data.length !== 0 && username.length !== 0
          ? `your chosen username (${username}) is already exist`
          : "") +
        " " +
        (username.length < 6 ? `username must longer than 6 character` : "") +
        " " +
        (password.length < 8 ? `password must longer than 8 character` : "") +
        " " +
        (lastName.length === 0 || firstName === 0
          ? "fields can't be empty"
          : "");
      setMessage(text);
      setShowMessage(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-[75px] text-xs text-center px-5 text-gray-700">
        {showMessage && message}
      </div>
      <div>
        <button
          className="rounded-full bg-blue-400 shadow p-1 px-3 text-white hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Check;
