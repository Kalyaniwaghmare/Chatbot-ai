import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-[26px] font-bold md:text-2xl sm:text-[22px]",
  xs: "text-sm font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-800_02 font-plusjakartasans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
