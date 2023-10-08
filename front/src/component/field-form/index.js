import { useState } from "react";

import "./index.css";

export default function Component({ placeholder, button, onSubmit }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.length === 0) return null;

    if (onSubmit) onSubmit(value);

    setValue("");
  };

  console.log("render");

  const isDisabled = value.length === 0;

  return (
    <div className="field-form">
      <textarea
        className="field-form__field"
        placeholder={placeholder}
        value={value}
        rows={2}
        onChange={handleChange}
      ></textarea>
      <button
        disabled={isDisabled}
        onClick={handleSubmit}
        className="field-form__button"
      >
        {button}
      </button>
    </div>
  );
}
