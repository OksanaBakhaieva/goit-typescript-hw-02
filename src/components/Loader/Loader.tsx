import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader: React.FC = () =>{
  return (
    <div className={css.loader}>    
    <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#0000ff"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>)
}

export default Loader;