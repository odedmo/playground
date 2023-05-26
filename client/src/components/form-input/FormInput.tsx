import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import "./FormInput.css";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const StyledGroup = styled.div({
  position: "relative",
  margin: "25px 0",
});

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <StyledGroup>
      <input {...otherProps} />
      {label && <div className="form-input-label">{label}</div>}
    </StyledGroup>
  );
};

export default FormInput;
