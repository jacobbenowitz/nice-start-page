import React from "react";

const InputText = ({
  label, id, value, handleChange,
  placeholder, errors }) => (

  <div className="flex flex-col justify-start gap-1 min-w-max">
    <label className="opacity-80" htmlFor={id}>{label}</label>
    <input
      required minLength="2" maxLength="100"
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 text-gray-800
      focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      // className="
      // mt-1 block w-full px-3 py-2 bg-white text-surfaceDark border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      // focus:outline-none focus:ring-amber-500 focus:ring-1 focus:ring-sky-500
      // disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      // invalid:border-red-500 invalid:text-red-600
      // focus:invalid:border-red-500 focus: invalid: ring-red-500"
      type={'text'}
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
    {errors}
  </div>

)

export default InputText;