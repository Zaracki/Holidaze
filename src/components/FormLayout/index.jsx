import React from 'react';

const FormLayout = ({ title, children }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#141414]">
    <div className="w-[632px] bg-[#282828] p-8">
      <h1 className="text-3xl font-bold mb-6 text-white">{title}</h1>
      {children}
    </div>
  </div>
);

export default FormLayout;