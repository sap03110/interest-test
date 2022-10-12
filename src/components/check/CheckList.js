import { useState, useEffect } from 'react';

import useStore from '../../store';
import CheckBox from './CheckBox';

const CheckList = ({ selections }) => {
  const [checksInfo, setChecksInfo] = useState(selections.map((content) => ({ content, checked: false })));
  const checkAnswerSelected = useStore((state) => state.checkAnswerSelected);
  const questionNumber = useStore((state) => state.questionNumber);
  const saveAnswer = useStore((state) => state.saveAnswer);

  const toggleCheck = (content) => {
    setChecksInfo((prevChecksInfo) =>
      prevChecksInfo.map((checkInfo) => {
        if (content === checkInfo.content) return { ...checkInfo, checked: !checkInfo.checked };
        return checkInfo;
      }),
    );
  };

  useEffect(() => {
    const isAnswerSelected = checksInfo.filter(({ checked }) => checked).length > 0;
    checkAnswerSelected(isAnswerSelected);

    return () => {
      const newAnswer = checksInfo.filter(({ checked }) => checked).map(({ content }) => content);
      saveAnswer(questionNumber, newAnswer);
    };
  }, [checksInfo, checkAnswerSelected, saveAnswer, questionNumber]);

  useEffect(() => {
    setChecksInfo(selections.map((content) => ({ content, checked: false })));
  }, [selections]);

  return checksInfo.map(({ content, checked }) => (
    <CheckBox key={content} value={content} checked={checked} onChange={toggleCheck.bind(null, content)} />
  ));
};

export default CheckList;
