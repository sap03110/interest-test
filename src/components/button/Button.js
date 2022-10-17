const Button = ({ type = 'button', className = '', onClick, children }) => {
  const buttonClassName = `btn ${className}`;

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
