import { useId } from 'react';

const RadioBox = ({ name, label, checked, onClick }) => {
  const radioId = useId();

  return (
    <>
      <input type="radio" name={name} checked={checked} readOnly id={radioId} />
      <label htmlFor={radioId} className="radio-btn" onClick={onClick}>
        {label}
      </label>
    </>
  );
};

export default RadioBox;
