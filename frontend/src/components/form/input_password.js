import React from "react";

const InputPassword = ({
  label, id, value, handleChange,
  placeholder, errors }) => (

  <div className="flex flex-col justify-start gap-1 my-3">
    <label className="opacity-80" htmlFor={id}>{label}</label>
    <input
      className="mt-1 block w-full px-3 py-2 bg-white border-b-4 text-surfaceDark border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid: border-pink-500 focus: invalid: ring-pink-500"
      type={'password'}
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      placeholder='••••••••••••'
    />
    {errors}
  </div>

)

export default InputPassword;