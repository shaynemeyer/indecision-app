import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, handleModalClose}) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleModalClose}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Some text</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleModalClose}>Okay</button>
  </Modal>
);

export default OptionModal;
