const Plus = ({ size = 32, color }) => {
  return (
    <svg
      id="bold"
      enableBackground="new 0 0 24 24"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="m12 0c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm5.25 13h-4.25v4.25c0 .552-.448 1-1 1s-1-.448-1-1v-4.25h-4.25c-.552 0-1-.448-1-1s.448-1 1-1h4.25v-4.25c0-.552.448-1 1-1s1 .448 1 1v4.25h4.25c.552 0 1 .448 1 1s-.448 1-1 1z"
      />
    </svg>
  );
};

export default Plus;
