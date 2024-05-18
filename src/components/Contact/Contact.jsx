import styles from "./Contact.module.css";
import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className={styles.firstTextElement}>
          <MdPerson size={24} /> {contact.name}
        </p>
        <p className={styles.textElement}>
          <FaPhoneAlt className={styles.iconItem} /> {contact.number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(contact.id))}
        className={styles.buttonElement}
        type="button"
      >
        Delete
      </button>
    </>
  );
}