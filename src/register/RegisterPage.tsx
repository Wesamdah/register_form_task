import { useEffect } from "react";

import RegisterForm from "./componetns/RegisterFormSection";

export default function Register() {
  useEffect(() => {
    document.title = "Dash Dah | Register";
  }, []);

  return (
    <div className="flex h-dvh w-screen overflow-hidden select-none">
      <div className="animate-swipe-up custom-scroll flex w-full flex-col items-center gap-4 overflow-y-scroll p-3 lg:w-[40%]">
        <RegisterForm />
      </div>
      <div className="relative hidden h-dvh w-[60%] rounded-l-2xl bg-[#fff2f2] p-4 lg:flex lg:flex-col">
        <h1 className="heading">
          Share <br /> valuable resources
        </h1>
        <p className="text_para">
          Now you can connect with fellow <br />
          traders around the world.
        </p>
        <div className="scale-125 self-start p-10">
          <img src="/assets/images/form_background.png" alt="orm_background" />
        </div>
        <div className="absolute right-0 hidden rotate-180 xl:block">
          <img src="/assets/images/distract_line.png" alt="distract_line" />
        </div>
      </div>
    </div>
  );
}
