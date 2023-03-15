import { clearState } from "../store";
import { useLogin } from "../hooks/use-login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginCheck({ username, password, dispatch }) {
  const navigate = useNavigate();
  const { data, logError, logIsFetching } = useLogin({
    username,
    password,
  });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = () => {
    if (data.length !== 0 && username.length !== 0 && password.length !== 0) {
      dispatch(clearState());
      navigate("/login/success");
    } else {
      let text =
        (data.length === 0 && password.length !== 0 && username.length !== 0
          ? `your username or password is not correct`
          : "") +
        " " +
        (password.length === 0 || username.length === 0
          ? `field can't be empty`
          : "");
      setMessage(text);
      setShowMessage(true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="h-[192.5px] text-xs text-center px-5 py-10 text-gray-700">
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

export default LoginCheck;
