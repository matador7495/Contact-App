import inputs from "../constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
        ))}
        <button>Add Contact</button>
      </div>
    </div>
  );
}

export default Contacts;
