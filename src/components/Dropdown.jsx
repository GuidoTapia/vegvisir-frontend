import React from "react";

export default function Dropdown(props) {
  const handleChange = (event) => {
    props.onChange && props.onChange(event.target.value);
  };

  return (
    <div className="w-full">
      {props.label && (
        <label for={`dropdown-${props.name}`}>{props.label}</label>
      )}
      <select
        name={props.name}
        id={`dropdown-${props.name}`}
        className="py-2 px-3 border-2 rounded-md w-full"
        onChange={handleChange}
      >
        {props.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
