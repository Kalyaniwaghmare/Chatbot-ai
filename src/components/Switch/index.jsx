import React from "react";
import PropTypes from "prop-types";

const sizes = {
  xs: {
    width: 46,
    height: 23,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <div className="checked-icon" />,
  uncheckedIcon = <div className="unchecked-icon" />,
  onChange,
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);

  const handleChange = () => {
    const newValue = !selected;
    setSelected(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={className} onClick={handleChange}>
      <div className={`switch ${selected ? "checked" : "unchecked"}`} style={sizes[size]}>
        {selected ? checkedIcon : uncheckedIcon}
      </div>
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
};

export { Switch };
