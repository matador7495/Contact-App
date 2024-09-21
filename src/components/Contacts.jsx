import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactProvider";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contact, setContact] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { dispatch } = useContext(ContactContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addOrUpdateHandler = () => {
    if (isEditing) {
      dispatch({ type: "EDIT", payload: contact });
      setIsEditing(false);
    } else {
      dispatch({
        type: "ADD",
        payload: { ...contact, id: Date.now() },
      });
    }
    setContact("");
  };

  const editHandler = (contactToEdit) => {
    setContact(contactToEdit);
    setIsEditing(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name] || ""}
            onChange={inputHandler}
          />
        ))}
        <button onClick={addOrUpdateHandler} className={isEditing ? styles.edit : ""}>
          {isEditing ? "Update Contact" : "Add Contact"}
        </button>
      </div>
      <ContactsList onEdit={editHandler} />
    </div>
  );
}

export default Contacts;
