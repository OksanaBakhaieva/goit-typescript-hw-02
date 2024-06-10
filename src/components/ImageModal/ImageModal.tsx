import { MdClose } from 'react-icons/md';
import ReactModal from 'react-modal';
import { FC } from 'react';
import css from './ImageModal.module.css';

interface ImageModalProps {
  closeModal: () => void;
  isModalOpen: boolean;
  imgSrc?: string;
  imgDescription?: string;
  imgAlt?: string;
}

const ImageModal: FC<ImageModalProps> = ({closeModal, isModalOpen, imgSrc, imgDescription, imgAlt,}:ImageModalProps) =>{
  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
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
      </ReactModal>
    </div>
  );
};

export default ImageModal;