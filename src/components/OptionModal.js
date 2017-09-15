import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
  >
    <h3>Some text</h3>
  </Modal>
);

export default OptionModal;
