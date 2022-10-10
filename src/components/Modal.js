const Modal = ({ list, openModal }) => {
  return (
    <div id="modal" className="appear">
      <h1 className="title">관련 역량</h1>
      <ul className="etc-list">
        {list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <button
        className="btn close"
        onClick={() => {
          document.getElementById('modal').classList.add('disappear');
          setTimeout(() => openModal(false), 500);
        }}
      >
        확인
      </button>
    </div>
  );
};

export default Modal;
