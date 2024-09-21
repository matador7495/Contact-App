import styles from "./ContactItem.module.css";

function ContactItem({ contact, dispatch }) {
  const { id, name, lastName, email, phone } = contact;

  const deleteHandler = () => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <li className={styles.item}>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span> {email}
      </p>
      <p>
        <span>📱</span>
        {phone}
      </p>
      <button onClick={deleteHandler}>🗑</button>
    </li>
  );
}

export default ContactItem;
