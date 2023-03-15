import { SlCheck } from "react-icons/sl";

function LoginSuccess() {
  return (
    <div className="flex flex-col items-center justify-evenly h-full">
      <div className="">
        <SlCheck className="text-8xl text-gray-400" />
      </div>
      <div className="text-center px-10">
        <h1 className="text-gray-900 text-2xl mb-6">Login Successful</h1>
        <h4 className="text-sm">You have successfully signed into your account</h4>
      </div>
    </div>
  );
}

export default LoginSuccess;
