import { forwardRef } from "react";

import "./index.css";

const InputWrap = forwardRef(
  (
    {
      label,
      placeholder,
      required,
      errorMessage,
      aditionalClass,
      inputConClass,
      inputClass,
      labelClass,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={aditionalClass}>
        <label className={`input-label font-semibold ${labelClass || ""}`}>
          {label} {required && <span className="error-message">*</span>}
        </label>
        <div className={`step-input-con ${inputConClass || ""}`}>
          <input
            className={`${inputClass || ''} step-input`}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
          {errorMessage && (
            <p className="error-message">{`${label} is required`}</p>
          )}
        </div>
      </div>
    );
  }
);

export default InputWrap;
