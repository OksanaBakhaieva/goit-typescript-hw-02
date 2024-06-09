import axios from 'axios';

const ACCESS_KEY = 'dEm4bysMWlOkPfqhJxSBpBX8NLy4bXDiFpPqIY80zxU';
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery:string, currentPage:number) => {
  const response = await axios.get(`search/photos?client_id=${ACCESS_KEY}&query=${searchQuery}&page=${currentPage}&&per_page=12`);

  return response.data;
  
};

// import axios, { AxiosResponse } from 'axios';
// import { Data } from './components/App/App';

// const ACCESS_KEY: string = 'dEm4bysMWlOkPfqhJxSBpBX8NLy4bXDiFpPqIY80zxU';
// // axios.defaults.baseURL = "https://api.unsplash.com/";

// const fetchImages = async (query: string, page: number): Promise<Data> => {
//    const { data }: AxiosResponse<Data> = await axios.get(
//     `https://api.unsplash.com/search/photos?page=${page}&query=${query}`,
//     {
//       headers: {
//         Authorization: `Client-ID ${ACCESS_KEY}`,
//       },
//     }
//   );
//   return data;
  
// };


// export default fetchImages;


