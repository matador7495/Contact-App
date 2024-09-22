import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactProvider";
import ShowModal from "./ShowModal";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contact, setContact] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { dispatch } = useContext(ContactContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addOrUpdateHandler = () => {
    if (isEditing) {
      setShowModal(true);
    } else {
      dispatch({ type: "ADD", payload: { ...contact, id: Date.now() } });
      resetForm();
    }
  };

  const handleModalResult = (result) => {
    if (result) dispatch({ type: "EDIT", payload: contact });
    resetForm();
    setShowModal(false);
  };

  const editHandler = (contactToEdit) => {
    setContact(contactToEdit);
    setIsEditing(true);
  };

  const resetForm = () => {
    setContact("");
    setIsEditing(false);
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
      {showModal && <ShowModal onResult={handleModalResult} />}
    </div>
  );
}

export default Contacts;
