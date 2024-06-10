import axios, { AxiosResponse } from 'axios';
import { Data } from './components/App/App.types';

const ACCESS_KEY: string = 'dEm4bysMWlOkPfqhJxSBpBX8NLy4bXDiFpPqIY80zxU';
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery:string, currentPage:number): Promise<Data> => {
  const response: AxiosResponse<Data>  = await axios.get(`search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}&page=${currentPage}&&per_page=12`);

  return response.data;
  
};
