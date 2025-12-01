import { useState, type ChangeEvent } from "react";
import type { InputField } from "../types/formInput";
import { Icon } from "@iconify/react";
import type { SignUpForm } from "../types/authData";

interface Props {
  input: InputField;
  data: SignUpForm;
  setData: React.Dispatch<React.SetStateAction<SignUpForm>>;
}

export default function AuthForm({ input, data, setData }: Props) {
  const [typo, setTypo] = useState<string>(input.type);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newData = { ...data };
    newData[name as keyof SignUpForm] = value;

    setData(newData);
  };

  return (
    <div className="flex flex-col gap-2 text-xl">
      {input.valid !== undefined ? (
        input.name !== "email" ? (
          <label
            htmlFor={input.name}
            className={`flex items-center gap-1 transition-all duration-200 ${
              !input.valid && data[input.name as keyof SignUpForm]
                ? "animate-shake text-sm text-red-500"
                : "text-lg text-[#6F4D58]"
            } `}
          >
            {input.label}
          </label>
        ) : (
          <label
            htmlFor={input.name}
            className={`flex items-center gap-1 text-lg text-[#6F4D58]`}
          >
            {input.label}
          </label>
        )
      ) : (
        <label
          htmlFor={input.name}
          className={`flex items-center gap-1 text-lg text-[#6F4D58]`}
        >
          {input.label}
        </label>
      )}

      <div className="relative">
        <input
          type={typo}
          placeholder={input.placeholder}
          name={input.name}
          onChange={handleChange}
          required
          autoComplete="off"
          aria-invalid={input.valid ? "false" : "true"}
          aria-describedby="uidnote"
          className="block w-full rounded-lg border border-[#ddd] p-2 text-[18px] focus:outline-none"
        />

        {input.type === "password" && (
          <Icon
            icon={typo === "password" ? "mdi:eye" : "iconamoon:eye-off-fill"}
            onClick={() => setTypo(typo === "password" ? "text" : "password")}
            className={`absolute right-5 -translate-y-1/2 cursor-pointer text-[#B87E8E] hover:opacity-80 ${
              input.name === "password"
                ? ` ${!input.valid && data.password ? "top-1/4" : "top-1/2"} `
                : ` ${!input.valid && data.password_confirmation ? "top-[30%]" : "top-1/2"} `
            } `}
          />
        )}

        {/* ERROR INSTRUCTIONS */}

        {input.valid !== undefined &&
        data[input.name as keyof SignUpForm] &&
        !input.valid ? (
          input.name === "name" ? (
            <p id="uidnote" className="mt-2 flex items-center gap-1 text-sm">
              <Icon icon={"material-symbols:info-outline"} />4 to 24 characters.
              Must begin with a letter. Letters, numbers, underscores.
            </p>
          ) : input.name === "password" ? (
            <p id="pwdnote" className="mt-2 flex items-center gap-1 text-sm">
              <Icon icon={"material-symbols:info-outline"} />8 to 24 characters.
              Must include uppercase, lowercase, a number, and a special
              character.
            </p>
          ) : input.name === "password_confirmation" ? (
            <p
              id="confirmnote"
              className="mt-2 flex items-center gap-1 text-sm"
            >
              <Icon icon={"material-symbols:info-outline"} />
              Must match the first password input field.
            </p>
          ) : null
        ) : null}
      </div>
    </div>
  );
}
