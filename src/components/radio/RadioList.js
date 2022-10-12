import { useEffect, useState } from 'react';

import { RADIO_BUTTON_TEXTS } from '../../constants';
import useStore from '../../store';
import RadioBox from './RadioBox';

const initialSelectInfo = RADIO_BUTTON_TEXTS.map((label) => ({ label, checked: false }));

const RadioList = () => {
  const [selectInfo, setSelectInfo] = useState(initialSelectInfo);
  const checkAnswerSelected = useStore((state) => state.checkAnswerSelected);
  const isAnswerSelected = useStore((state) => state.isAnswerSelected);

  const radioClick = (label) => {
    setSelectInfo((prevSelectInfo) =>
      prevSelectInfo.map((select) => {
        if (label === select.label) return { ...select, checked: !select.checked };
        return { ...select, checked: false };
      }),
    );
    checkAnswerSelected(true);
  };

  useEffect(() => {
    if (!isAnswerSelected) setSelectInfo(initialSelectInfo);
  }, [isAnswerSelected]);

  return (
    <ul className="radio-div">
      {selectInfo.map(({ label, checked }) => (
        <li key={label}>
          <RadioBox name="category_score" label={label} checked={checked} onClick={radioClick.bind(null, label)} />
        </li>
      ))}
    </ul>
  );
};

export default RadioList;
