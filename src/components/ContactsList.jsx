import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactProvider";
import styles from "./ContactsList.module.css";
import ShowModal from "./ShowModal";

const ContactsList = ({ onEdit }) => {
  const { contacts, dispatch } = useContext(ContactContext);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [singleDelete, setsingleDelete] = useState(null);

  const selectedHandler = (id) => {
    const isAlreadySelected = selectedContacts.includes(id);

    setSelectedContacts(isAlreadySelected ? selectedContacts.filter((contactId) => contactId !== id) : [...selectedContacts, id]);
  };

  const bulkDeleteHandler = () => {
    if (selectedContacts.length) {
      setIsModalVisible(true);
    }
  };

  const singleDeleteHandler = (id) => {
    setsingleDelete(id);
    setIsModalVisible(true);
  };

  const modalResultHandler = (result) => {
    if (result) {
      if (singleDelete) {
        dispatch({ type: "DELETE", payload: singleDelete });
        setsingleDelete(null);
      } else {
        selectedContacts.forEach((contactId) => {
          dispatch({ type: "DELETE", payload: contactId });
        });
        setSelectedContacts([]);
      }
    }
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <>
          <ul className={styles.contacts}>
            {contacts.map((contact) => {
              const { id, name, lastName, email, phone } = contact;
              return (
                <li key={id} className={styles.item}>
                  <input type="checkbox" checked={selectedContacts.includes(id)} onChange={() => selectedHandler(id)} className={styles.checkbox} />
                  <p>
                    {name} {lastName}
                  </p>
                  <p>
                    <span>📧</span> {email}
                  </p>
                  <p>
                    <span>📱</span> {phone}
                  </p>
                  <button onClick={() => onEdit(contact)}>✏️</button>
                  <button onClick={() => singleDeleteHandler(id)}>🗑</button>
                </li>
              );
            })}
            {selectedContacts.length > 0 && (
              <button className={styles.bulkDeleteButton} onClick={bulkDeleteHandler}>
                Delete Selected
              </button>
            )}
          </ul>
          {isModalVisible && <ShowModal onResult={modalResultHandler} />}
        </>
      ) : (
        <p className={styles.message}>No contacts found</p>
      )}
    </div>
  );
};

export default ContactsList;
