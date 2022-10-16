import ModalPortal from '../../common/ModalPortal';
import Button from '../../button/Button';
import Close from '../../icon/Close';

import { RESULT_MODAL_TITLE } from '../../../constants';

const ResultModal = ({ closeModal, children }) => {
  return (
    <ModalPortal>
      <div className="modal-backdrop appear" onClick={closeModal}></div>
      <div id="result-modal" className="appear">
        <div className="result-modal-header">
          <Button className="icon-btn" onClick={closeModal}>
            <Close />
          </Button>
        </div>
        <h1 className="title">{RESULT_MODAL_TITLE}</h1>
        {children}
      </div>
    </ModalPortal>
  );
};

export default ResultModal;
