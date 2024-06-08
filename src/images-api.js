import axios from 'axios';

const ACCESS_KEY = 'dEm4bysMWlOkPfqhJxSBpBX8NLy4bXDiFpPqIY80zxU';
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get(`search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}&page=${currentPage}&&per_page=12`);

  return response.data;
  
};



