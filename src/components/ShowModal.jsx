import styles from "./ShowModal.module.css";

const ShowModal = ({ onResult }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Confirmation</h2>
        <p>Are you sure you want to continue?</p>
        <div className={styles.buttons}>
          <button className={styles.confirmButton} onClick={() => onResult(true)}>
            Yes
          </button>
          <button className={styles.cancelButton} onClick={() => onResult(false)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
