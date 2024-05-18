import styles from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={styles.messageWrapper}>
      <h2 className={styles.message}>
        Something went wrong. Please reload the page!
      </h2>
    </div>
  );
}