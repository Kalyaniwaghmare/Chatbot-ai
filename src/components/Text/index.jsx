import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  lg: "text-[15px] font-normal",
  s: "text-[13px] font-medium",
  xl: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
  md: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "lg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
