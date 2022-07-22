import React from "react";

const LabeledInput = ({
  id, label, value, type, handleChange, isRequired = true,
  placeholder, minLength = "2", maxLength = "100", errors }) => {

  // let pattern;

  // if (type === "email") pattern = new RegExp("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/")


  return (
    <div className="flex flex-col justify-start gap-1 min-w-max">
      <label className="opacity-80" htmlFor={id}>{label}</label>
      <input
        required={isRequired ? "required" : "optional"}
        // pattern={pattern}
        minLength={minLength} maxLength={maxLength}
        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-gray-800
        focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
        disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
        invalid:border-red-500 invalid:text-red-600 invalid:ring-red-500
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        type={type}
        name={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {errors}
    </div>
  )
}

export default LabeledInput;