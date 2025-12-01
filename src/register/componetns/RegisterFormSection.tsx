import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import type { InputField } from "../../types/formInput";
import type { SignUpForm } from "../../types/authData";
import AuthForm from "../../components/AuthForm";

import { toast } from "react-toastify";

const mini_avatars = [
  "/assets/images/mini_avatar/avatar_1.png",
  "/assets/images/mini_avatar/avatar_2.png",
  "/assets/images/mini_avatar/avatar_3.png",
  "/assets/images/mini_avatar/avatar_4.png",
  "/assets/images/mini_avatar/avatar_5.png",
  "/assets/images/mini_avatar/avatar_6.png",
  "/assets/images/mini_avatar/avatar_7.png",
  "/assets/images/mini_avatar/avatar_8.png",
];

const userRegex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function RegisterForm() {
  const [data, setData] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [validName, setValidName] = useState(false);

  const [validPwd, setValidPwd] = useState(false);

  const [validMatch, setValidMatch] = useState(false);

  const [success, setSuccess] = useState(false);

  const inputs: Array<InputField> = [
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Enter your full name",
      valid: validName,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      placeholder: "Enter your email address",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      valid: validPwd,
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "password_confirmation",
      placeholder: "Confirm your password",
      valid: validMatch,
    },
  ];

  useEffect(() => {
    const result = userRegex.test(data.name);
    setValidName(result);
  }, [data.name]);

  useEffect(() => {
    const result = PasswordRegex.test(data.password);
    setValidPwd(result);
    const match = data.password === data.password_confirmation;
    setValidMatch(match);
  }, [data.password, data.password_confirmation]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const v1 = userRegex.test(data.name);
    const v2 = PasswordRegex.test(data.password);
    if (!v1 || !v2) {
      toast.error("Invalid Entry");
      return;
    }

    if (data.password !== data.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    console.log("Form Data:", data);

    setSuccess(true);
  };

  return (
    <React.Fragment>
      <h1 className="text-[#6F4D58]">DashDah</h1>
      <div className="flex w-full grow flex-col items-center space-y-2">
        <h2 className="heading">Join DashDah.</h2>
        <div className="flex -space-x-3">
          {mini_avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`mini_avatar_${index + 1}`}
              className={`z-[${index}]`}
            />
          ))}
        </div>
        <p className="text_para">Join these and 5005 other traders</p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full grow flex-col gap-3"
        >
          {inputs.map((input, index) => (
            <AuthForm key={index} input={input} data={data} setData={setData} />
          ))}
          <button
            type="submit"
            className="cursor-pointer rounded-lg bg-[#B87E8E] p-4 text-lg text-white hover:opacity-80 disabled:cursor-default disabled:opacity-80"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-[18px] text-[#5C5C5C] select-none">
          Joined Already?
          <span className="cursor-pointer text-[#B87E8E] underline">
            <Link to={"/login"}> Sign in</Link>
          </span>
        </p>
      </div>
    </React.Fragment>
  );
}
