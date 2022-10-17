import { useNavigate } from 'react-router-dom';

import Button from './Button';
import { RESULT_BUTTON_TEXT } from '../../constants';

const ResultButton = () => {
  const navigate = useNavigate();
  const handleGoResult = () => navigate('/result');

  return (
    <Button className="result" onClick={handleGoResult}>
      {RESULT_BUTTON_TEXT}
    </Button>
  );
};

export default ResultButton;
