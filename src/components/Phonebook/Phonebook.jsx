import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
import PropTypes from 'prop-types';

const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ev => {
    const { name, value } = ev.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = ev => {
    ev.preventDefault();
    const id = nanoid();
    const сontact = { id, name, number };

    onSubmit(сontact);

    setName('');
    setNumber('');
  };

  return (
    <div className={css.formWrapper}>
      <label className={css.inputTitle}>Name</label>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          value={name}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={css.inputTitle}>Number</label>
        <input
          className={css.input}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
        <button className={css.btnSubmit}>Add contact</button>{' '}
      </form>
    </div>
  );
};

export default Phonebook;

// export default class Phonebook extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = ev => {
//     const { name, value } = ev.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = ev => {
//     ev.preventDefault();
//     const contact = {
//       id: nanoid(),
//       name: this.state.name,
//       number: this.state.number,
//     };

//     this.props.onSubmit(contact);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <div className={css.formWrapper}>
//         <label className={css.inputTitle}>Name</label>
//         <form onSubmit={this.handleSubmit} className={css.form}>
//           <input
//             className={css.input}
//             value={this.state.name}
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChange}
//           />
//           <label className={css.inputTitle}>Number</label>
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />

//           <button className={css.btnSubmit}>Add contact</button>
//         </form>
//       </div>
//     );
//   }
// }

//  ПРОПСИ НЕ ВИДАЛЯТИ

// Phonebook.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
