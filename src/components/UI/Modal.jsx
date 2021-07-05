
import ReactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => <div onClick={props.onClose} className={classes.backdrop} />;

const ModalOverlay = props => (
  <div className={classes.modal}>{props.children}</div>
);

const modalElement = document.getElementById('overlay');

const Modal = props => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, modalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalElement)}
    </>
  );
};

export default Modal;
