import React from "react";

const InputText = ({
  label, id, value, handleChange,
  placeholder, errors }) => (

  <div className="flex flex-col justify-start gap-1">
    <label className="opacity-80" htmlFor={id}>{label}</label>
    <input
      className="py-1"
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