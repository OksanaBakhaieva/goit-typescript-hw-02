export type Pictures = {
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