import Button from '../button/Button';
import Plus from '../icon/Plus';

const primaryColor = '#d94925';

const ResultBox = ({ num, title, openModal, children }) => {
  return (
    <div className="part-box">
      <div className="part-header">
        <p className="label">
          Part {num}. {title}
        </p>
        <Button className="icon-btn" onClick={openModal}>
          <Plus color={primaryColor} />
        </Button>
      </div>
      <div className="label-cont">{children}</div>
    </div>
  );
};

export default ResultBox;
