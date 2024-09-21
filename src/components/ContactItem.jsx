import styles from "./ContactItem.module.css";

function ContactItem({ contact }) {
  const { id, name, lastName, email, phone } = contact;

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
      <button onClick={handleDelete}>🗑</button>
    </li>
  );
}

export default ContactItem;
