import { useId } from 'react';

const CheckBox = ({ value, checked, onChange }) => {
  const checkId = useId();

  return (
    <span className="checks">
      <input id={checkId} type="checkbox" value={value} checked={checked} onChange={onChange} />
      <label htmlFor={checkId}>{value}</label>
    </span>
  );
};

export default CheckBox;
