import { useState } from 'react';
import PropTypes from 'prop-types';
import CONFIG from '../../data/formConfig.json';
import style from './ContactsForm.module.scss';

export default function Phonebook({ addContactHandler }) {
   const [name, setName] = useState('');
   const [number, setNumber] = useState('');

   const toChangeHandler = ({ currentTarget }) => {
      const { name, value } = currentTarget;
      name === 'name' && setName(value);
      name === 'number' && setNumber(value);
   };

   const toSubmitHandler = event => {
      event.preventDefault();
      addContactHandler({ name, number });
      setName('');
      setNumber('');
   };

   return (
      <form className={style.form} onSubmit={toSubmitHandler}>
         <ul className={style.form__list}>
            {CONFIG.map(({ type, name, pattern, title }) => (
               <li key={name} className={style.form__item}>
                  <input
                     className={style.form__input}
                     id={type}
                     type={type}
                     name={name}
                     pattern={pattern}
                     title={title}
                     value={name[name]}
                     onChange={toChangeHandler}
                     placeholder=" "
                     required
                  />
                  <div className={style.cut}></div>
                  <label className={style.placeholder} htmlFor={type}>
                     {name}
                  </label>
               </li>
            ))}
         </ul>
         <button className={style.form__button} type="submit">
            Add Contact
         </button>
      </form>
   );
}

CONFIG.propTypes = {
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   pattern: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
};

Phonebook.propTypes = {
   name: PropTypes.string,
   number: PropTypes.string,
};
