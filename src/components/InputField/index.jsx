import React from 'react';

const InputField = ({ label, type, name, value, onChange, placeholder, required }) => (
  <div>
    <h2 className="text-lg text-white font-semibold">{label}</h2>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 mt-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default InputField;
