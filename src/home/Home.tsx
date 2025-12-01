import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Icon } from "@iconify/react";

interface ContactInfoProps {
  icon: string;
  text: string;
}

const ContactInfo = ({ icon, text }: ContactInfoProps) => {
  return (
    <div className="mb-2 flex items-start text-sm text-white md:text-lg">
      <Icon
        icon={icon}
        className="mt-1 mr-3 h-4 w-4 text-white/90 md:h-6 md:w-6"
      />
      <p className="hover:underline">{text}</p>
    </div>
  );
};

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dash Dah | Home";
  }, []);

  return (
    <main className="flex h-dvh min-h-[500px] w-screen flex-col overflow-hidden md:flex-row">
      {/*Profile Image Mid Screens */}
      <div className="relative hidden h-full items-end justify-center bg-gray-200/5 p-4 md:block md:w-[35%] md:p-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute h-[95%] w-[90%] overflow-hidden rounded-l-[100px] rounded-r-[100px] bg-white shadow-2xl md:h-[90%] md:w-[85%]">
            <img
              src="/assets/images/profile_card.jpg"
              alt="Wessam Dahrouj - Front-End Developer"
              className="h-full w-full rounded-l-[100px] rounded-r-[100px] object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-4 left-4 z-10 bg-white p-1 text-xs font-bold text-gray-800 md:bottom-6 md:left-6 md:p-3 md:text-lg">
          Front-End Developer
        </div>
      </div>

      <section className="relative flex h-full w-full flex-col justify-between overflow-y-auto bg-[#8d405a] p-6 md:w-[65%] md:p-10">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 h-4 w-4 rounded-full bg-white opacity-70"></div>
          <div className="absolute top-[20%] right-[10%] h-5 w-5 rounded-full border-2 border-white opacity-80"></div>
          <div className="absolute bottom-[40%] left-[20%] h-3 w-3 rounded-full bg-pink-200 opacity-80"></div>
          <div className="absolute right-[15%] bottom-[10%] h-8 w-8 rounded-full border-4 border-white opacity-60"></div>
        </div>

        <div className="z-10 flex flex-col border-b border-b-gray-300">
          <h1 className="mb-4 text-3xl leading-tight font-bold text-white sm:text-4xl md:mb-6 md:text-6xl">
            Wessam Dahrouj
          </h1>

          <div className="flex space-x-2 md:space-x-4">
            <Link
              to="https://www.facebook.com/wesamdah"
              aria-label="Facebook"
              target="_blank"
            >
              <button className="h-8 w-8 cursor-pointer rounded-full p-0 text-white transition hover:text-gray-400 md:h-10 md:w-10">
                <Icon icon="mdi:facebook" className="text-xl" />
              </button>
            </Link>

            <Link
              to="https://www.instagram.com/wessam__d__a/"
              aria-label="Instagram"
              target="_blank"
            >
              <button className="h-8 w-8 cursor-pointer rounded-full p-0 text-white transition hover:text-gray-400 md:h-10 md:w-10">
                <Icon icon="mdi:instagram" className="text-xl" />
              </button>
            </Link>
          </div>
        </div>

        <button
          onClick={() => navigate("/register")}
          className="flex w-full cursor-pointer items-center justify-center rounded-2xl bg-[#B87E8E] p-4 font-bold text-white hover:opacity-80"
        >
          Register Page
        </button>

        <div className="z-10 mt-6 border-t border-white/20 pt-6 md:pt-10">
          <ContactInfo icon="mdi:phone" text="+963 951-470-458" />
          <ContactInfo icon="mdi:email" text="wessamdahrouj@gmail.com" />
          <ContactInfo
            icon="mdi:map-marker"
            text="Syria, Damascus, Kafer Sousa"
          />
        </div>

        {/*Profile Image Mobile Screen */}
        <div className="mt-6 flex items-center justify-center md:hidden">
          <div className="relative h-64 w-3/4 overflow-hidden rounded-xl bg-white shadow-lg">
            <img
              src="/assets/images/profile_card.jpg"
              alt="Wessam Dahrouj - Front-End Developer"
              className="h-full w-full object-cover"
            />
            <div className="absolute right-2 bottom-2 z-10 bg-white p-1 text-xs font-bold text-gray-800">
              Front-End Developer
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
