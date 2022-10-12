import useStore from '../../store';
import { NO_SELECTION_ALERT_MESSAGE, NEXT_BUTTON_TEXT } from '../../constants';
import Button from './Button';

const NextButton = () => {
  const isAnswerSelected = useStore((state) => state.isAnswerSelected);
  const goNextQuestion = useStore((state) => state.goNextQuestion);

  const handleClick = () => {
    if (!isAnswerSelected) return alert(NO_SELECTION_ALERT_MESSAGE);
    goNextQuestion();
  };

  return (
    <Button className="next" onClick={handleClick}>
      {NEXT_BUTTON_TEXT}
    </Button>
  );
};

export default NextButton;
