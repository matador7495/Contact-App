import { useContext, useState } from "react";
import { ContactContext } from "../context/ContactProvider";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contact, setContact] = useState("");
  const { dispatch } = useContext(ContactContext);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const addHandler = () => {
    dispatch({
      type: "ADD",
      payload: { ...contact, id: Date.now() },
    });
    setContact("");
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
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactsList />
    </div>
  );
}

export default Contacts;
