import React, { useState } from "react";

interface InputContainerProps {
  type?: string;
  placeholder: string;
  defaultValue: string;
  ind: number;
  getValue: (value: string) => void;
  error?: string; // Accepts error message
}

export default function InputContainer({
  type = "text",
  placeholder,
  defaultValue,
  ind,
  getValue,
  error,
}: InputContainerProps) {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    getValue(inputValue); // Pass value back to parent
  };

  return (
    <div className=" pb-3 w-full flex items-center justify-between">
      <label htmlFor="fieldInput" className=" w-full flex items-center gap-2"><span className=" w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold bg-blue-500">{ind}</span> update the  <span className=" font-semibold">{placeholder}</span></label>
      <div className="  flex-col gap-0 items-center relative">
          <input
            type={type}
            id="fieldInput"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={`bg-background w-full min-w-[220px] p-2 outline-none text-gray-800 border-2 rounded-md ${
              error ? "border-red-500 " : "border-gray-500/50 "
            } focus:border-primary`}
          />
          {error && <p className="text-red-500 text-xs  absolute ">{error}</p>} {/* Show error if exists */}
        
      </div>
    </div>
  );
}
