import { BiError } from 'react-icons/bi';
import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message?: string;
}

export default function ErrorMessage ({ message = '' }: ErrorMessageProps) {
  return (
    <div className={css.errorMessage}>
      <BiError size={36} />
      <p>
        {message.length > 0
          ? message
          : 'Whoops, something went wrong! Please try reloading this page!'}
      </p>
    </div>
  );
};

