import styles from "./contactList.module.css";
import { MainTitle } from "components/Main.styled";
import PropTypes from 'prop-types';

export default function ContactList({contacts, onDeleteContact}) {
    const elements = contacts.map(({name, number, id}) => {
        return <li key={id} className={styles.item}> {name}: {number} <span onClick={() => onDeleteContact(id)} className={styles.remove}>X</span></li>
    })
    return (
        <>
            <MainTitle>Contact list</MainTitle>
            <ol>{elements}</ol>
        </>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}