import { MdClose } from 'react-icons/md';
import Modal from "react-modal";
import { FC } from 'react';
import css from './ImageModal.module.css';

Modal.setAppElement("#root");

interface ImageModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
  imgSrc?: string;
  imgDescription?: string;
  imgAlt?: string;
}

const ImageModal: FC<ImageModalProps> = ({closeModal, isModalOpen, imgSrc, imgDescription, imgAlt,}) =>{
   const customStyles: Modal.Styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
    content: {
      padding: `none`,
      border: `none`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overflow: "hidden",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <button className={css.btnCloseModal} onClick={closeModal}>
          <MdClose size={36} />
        </button>
        <div className={css.imageContainer}>
          <img
            className={css.image}
            src={
              imgSrc ||
              'https://pixabay.com/vectors/default-emblem-icon-icons-matt-1294448/'
            }
            alt={imgAlt || 'Image according to your request'}
          />
          <p className={css.imageInfo}>
            {imgDescription || 'Image according to your request'}
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;