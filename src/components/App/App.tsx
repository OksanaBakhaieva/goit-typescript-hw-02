import { useEffect, useState } from 'react';
import { fetchImages } from '../../images-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Toaster } from 'react-hot-toast';

import css from './App.module.css';
import { errorMes, noquery } from '../../services/toaster';

export interface Pictures {
  id: string;
  description: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
  };
};

export type ModalWindow = {
  imgSrc: string;
  imgDescription: string;
  imgAlt: string;
};

export type Data = {
  total: number;
  total_pages: number;
  results: Pictures[];
};

export default function App() {
    const [searchQuery, setSearchQuery] = useState<string | null>(null);
    const [pictures, setPictures] = useState<Pictures[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [loadMore, setLoadMore] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<ModalWindow | null>(null);

    useEffect(() => {
        if (!searchQuery || searchQuery === null) {
            setLoadMore(false);
            setIsModalOpen(false);
            setIsError(false);
        return;
        }
        async function getImages() {
            try {
                setLoadMore(false);
                setIsError(false);
                setIsModalOpen(false);
                setIsLoading(true);
                const data: Data = await fetchImages(searchQuery, page);
                    if (data.total === 0) {
                        noquery();
                        return;
                    }
                    if (data.total_pages > page) {
                    setLoadMore(true);
                    }
                
                setPictures(prevState => prevState.concat(data.results));
            } catch (err) {
                setIsError(true);
                errorMes();
            } finally {
                setIsLoading(false);
            }
        }
        getImages();
    }, [searchQuery, page]);

    const handleSearchQuery = (query: string) => {
        setSearchQuery(query);
        setPage(1);
        setPictures([]);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = (image: Modal) => {
        setSelectedImage(image);
        openModal();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return(
        <div className={css.container}>
            <SearchBar onSubmit={handleSearchQuery} />
            {isError && <ErrorMessage />}
            <ImageGallery pictures={pictures} onImageClick={handleImageClick} />
            {isLoading && <Loader />}
            {loadMore && <LoadMoreBtn onLoadMore={handleLoadMore} />}
            {isModalOpen && (<ImageModal
                {...selectedImage}
                closeModal={closeModal}
                isModalOpen={isModalOpen}
                />
            )}
            <Toaster toastOptions={{
                style: {
                    background: '#4e75ff',
                    color: '#fff',
                },
            }}/>
        </div>
)}

