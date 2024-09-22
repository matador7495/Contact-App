import { useState } from "react";
import styles from "./ContactItem.module.css";
import ShowModal from "./ShowModal";

function ContactItem({ contact, dispatch, onEdit }) {
  const { id, name, lastName, email, phone } = contact;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const editHandler = () => onEdit(contact);
  const deleteHandler = () => setIsModalVisible(true);

  const handleModalResult = (result) => {
    if (result) dispatch({ type: "DELETE", payload: id });
    setIsModalVisible(false);
  };

  return (
    <>
      <li className={styles.item}>
        <p>
          {name} {lastName}
        </p>
        <p>
          <span>📧</span> {email}
        </p>
        <p>
          <span>📱</span> {phone}
        </p>
        <button onClick={editHandler}>✏️</button>
        <button onClick={deleteHandler}>🗑</button>
      </li>
      {isModalVisible && <ShowModal onResult={handleModalResult} />}
    </>
  );
}

export default ContactItem;
