import { InputHTMLAttributes } from "react";

import "./FormInput.css";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <div className="group">
      <input {...otherProps} />
      {label && <div className="form-input-label">{label}</div>}
    </div>
  );
};

export default FormInput;
