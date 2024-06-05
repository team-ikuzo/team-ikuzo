import { StDiv, StInput, StLabel } from './StyledInput';

export const Input = ({ label, name, value, type, onChange }) => {
  return (
    <StDiv>
      <StLabel htmlFor={name}>{label}</StLabel>
      <StInput name={name} id={name} type={type} onChange={onChange} value={value} />
    </StDiv>
  );
};
