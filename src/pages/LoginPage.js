import React from "react";
import NameInput from "../components/NameInput";

const LoginPage = () => {
  return (
    <div
      className={`w-86 sm:w-[35rem] rounded-xl font-semibold dark:border-slate-500`}
    >
      <NameInput />
    </div>
  );
};

export default LoginPage;
