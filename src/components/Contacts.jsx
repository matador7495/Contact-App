import { useState } from "react";

import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const [contact, setContact] = useState({ name: "", lastName: "", email: "", phone: "" });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input key={index} type={input.type} name={input.name} placeholder={input.placeholder} onChange={inputHandler} />
        ))}
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
