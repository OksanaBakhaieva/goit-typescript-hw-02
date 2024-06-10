import { ModalWindow, Pictures } from '../App/App.types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { FC } from 'react';

interface ImageGalleryProps {
  onImageClick: (image: ModalWindow) => void;
  pictures: Pictures[] | null;
}

const ImageGallery: FC<ImageGalleryProps> = ({ pictures, onImageClick }:ImageGalleryProps)=> {
    return (
        <ul className={css.gallery}>
            {pictures !== null && Array.isArray(pictures) && pictures.map(picture => {
                return (
                    <li className={css.card} key={picture.id}>
                        <ImageCard picture={picture} onImageClick={onImageClick} />
                    </li>)
            })}
        </ul>
)}
export default ImageGallery;