import { notify } from '../../services/toaster';
import { Field, Form, Formik } from 'formik';
import { IoSearchSharp } from "react-icons/io5";
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar ({ onSubmit }: SearchBarProps) {
  return (
    <Formik
      initialValues={{ query: '' }}
      onSubmit={(values, actions) => {
        if (!values.query) {
          notify();
          return;
        }
      onSubmit(values.query);
      actions.resetForm();
      }}
    >
      <Form className={css.form}>
          <button className={css.searchBtn} type="submit">
            <IoSearchSharp size={16} />
          </button>
          <Field className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />                
      </Form>
    </Formik>
  );
};

