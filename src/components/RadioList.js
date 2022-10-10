const RadioList = ({ getSelected }) => {
  const radioClick = (e) => {
    Array.from(document.getElementsByTagName('li')).map((item) => {
      return (item.classList = 'radio-btn');
    });
    e.target.classList.add('selected');
    getSelected(e.target.dataset.value);
  };

  return (
    <ul className="radio-div">
      <li className="radio-btn" data-value="1" onClick={radioClick}>
        매우 낮음 (1점)
      </li>
      <li className="radio-btn" data-value="2" onClick={radioClick}>
        낮음 (2점)
      </li>
      <li className="radio-btn" data-value="3" onClick={radioClick}>
        보통 (3점)
      </li>
      <li className="radio-btn" data-value="4" onClick={radioClick}>
        높음 (4점)
      </li>
      <li className="radio-btn" data-value="5" onClick={radioClick}>
        매우 높음 (5점)
      </li>
    </ul>
  );
};

export default RadioList;
