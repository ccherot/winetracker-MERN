import React, { useState } from "react";

// This is basicall a generic, reusable way of making a dropdown
const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdpwn-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!options.length}
      >
        <option />
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
