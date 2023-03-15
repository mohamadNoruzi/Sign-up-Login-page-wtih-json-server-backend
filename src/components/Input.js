import { useState } from "react";

function Input({ label, handle, value, placeholder, setPlace }) {
  const [bold, setBold] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="mb-7 px-10 w-full grid">
      <label className={visible ? "" : "invisible"}>
        <h2 className={bold}>{label}</h2>
      </label>
      <input
        className="pl-2 p-2 w-{100px} rounded shadow bg-gray-50 text-sm focus:outline-none"
        onChange={handle}
        value={value}
        placeholder={placeholder}
        onFocus={() => {
          setPlace("");
          setBold("text-gray-400");
          setVisible(true);
        }}
        onBlur={() => {
          setPlace(label);
          setBold("");
          if (value === "") {
            setVisible(false);
          } else {
            setVisible(true);
            setBold("text-gray-400");
          }
        }}
      />
    </div>
  );
}

export default Input;
