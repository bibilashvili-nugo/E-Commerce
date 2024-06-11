import "./signIn.css";
// import MuiModals from "./MuiModal";
// import { useState } from "react";

type SignInType = {
  text: string;
  className: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignIn = ({ text, className, setOpen }: SignInType) => {
  return (
    <button className={`${className} btn-sign`} onClick={() => setOpen(true)}>
      {text}
    </button>
  );

  // <button
  //   className={`${className} btn-sign`}
  //   onClick={() => {
  //     <MuiModals open={open} setOpen={setOpen} />;
  //   }}
  // >
  //   {text}
  // </button>
};

export default SignIn;
