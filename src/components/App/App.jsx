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

export default function App() {
    const [searchQuery, setSearchQuery] = useState(null);
    const [pictures, setPictures] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({
        imgSrc: '',
        imgDescription: '',
        imgAlt: '',
   });

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
                const data = await fetchImages(searchQuery, page);
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

    const handleSearchQuery = query => {
        setSearchQuery(query);
        setPage(1);
        setPictures([]);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = image => {
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

