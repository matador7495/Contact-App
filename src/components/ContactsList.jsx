import { useContext } from "react";
import { ContactContext } from "../context/ContactProvider";

import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

const ContactsList = ({ onEdit }) => {
  const { contacts, dispatch } = useContext(ContactContext);

  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} dispatch={dispatch} onEdit={onEdit} />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contacts found</p>
      )}
    </div>
  );
};
export default ContactsList;
