import { Modal, Pictures } from '../App/App';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';


interface ImageGalleryProps {
  onImageClick: (image: Modal) => void;
  pictures: Pictures[] | null;
}

export default function ImageGallery({ pictures, onImageClick }:ImageGalleryProps) {
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
