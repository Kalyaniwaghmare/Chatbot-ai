import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[27px]",
};
const variants = {
  fill: {
    orange_50: "bg-orange-50 text-gray-800_02",
    green_100: "bg-green-100 text-gray-800",
    gray_800_02: "bg-gray-800_02 text-white-A700",
  },
};
const sizes = {
  xs: "h-[43px] px-[30px] text-[13px]",
  sm: "h-[54px] px-[35px] text-sm",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "gray_800_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["orange_50", "green_100", "gray_800_02"]),
};

export { Button };
