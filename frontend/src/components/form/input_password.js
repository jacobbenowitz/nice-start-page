import React from "react";

const InputPassword = ({
  label, id, value, handleChange,
  placeholder, errors }) => (

  <div className="flex flex-col justify-start gap-1 my-3">
    <label className="opacity-80" htmlFor={id}>{label}</label>
    <input
      className="py-1 text-white"
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