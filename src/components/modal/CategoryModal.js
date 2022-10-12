import { useRef } from 'react';

import { MODAL_TITLE, ASSIGN_BUTTON_TEXT } from '../../constants';
import Button from '../button/Button';
import ModalPortal from '../common/ModalPortal';

const CategoryModal = ({ items, closeModal }) => {
  const modalRef = useRef();

  return (
    <ModalPortal>
      <div className="modal-backdrop appear" onClick={closeModal}></div>
      <div id="modal" ref={modalRef}>
        <h1 className="title">{MODAL_TITLE}</h1>
        <ul className="etc-list">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <Button className="close" onClick={closeModal}>
          {ASSIGN_BUTTON_TEXT}
        </Button>
      </div>
    </ModalPortal>
  );
};

export default CategoryModal;
