import React from "react";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="w-full px-6 md:px-[70px] max-w-[1400px] mx-auto">
      {children}
    </div>
  );
};

export default LayoutWrapper;
