import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalComponent = ({ openModal, closeModal, modalIsOpen, children }) => {

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <button onClick={closeModal} className='w-10 h-10 rounded-full bg-red-600 text-white text-xl flex justify-center items-center'>X</button>
                {children}
            </Modal>
        </div>
    )
}

export default ModalComponent