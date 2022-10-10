const CheckList = ({ answer, setAnswer, getSelected, list }) => {
  return (
    <div>
      {list.map((cont, idx) => {
        return (
          <span className="checks">
            <input
              id={'answer' + (idx + 1)}
              type="checkbox"
              value={cont}
              onClick={(e) => {
                e.target.checked
                  ? setAnswer([...answer, e.target.value])
                  : setAnswer(answer.filter((c) => c !== e.target.value));
                getSelected(document.querySelectorAll('input[type="checkbox"]:checked').length);
              }}
            />
            <label id={'label' + (idx + 1)} htmlFor={'answer' + (idx + 1)}>
              {cont}
            </label>
          </span>
        );
      })}
    </div>
  );
};

export default CheckList;
