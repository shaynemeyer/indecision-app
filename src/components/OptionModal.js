import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption, handleModalClose}) => (
  <Modal
    isOpen={!!selectedOption}
    contentLabel="Selected Option"
  >
    <h3>Some text</h3>
    {selectedOption && <p>{selectedOption}</p>}
    <button onClick={handleModalClose}>Okay</button>
  </Modal>
);

export default OptionModal;
