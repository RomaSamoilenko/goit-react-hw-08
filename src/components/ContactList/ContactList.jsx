import styles from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={styles.listBox}>
      <ul className={styles.listElement}>
        {filteredContacts.map((person) => (
          <li className={styles.listItem} key={person.id}>
            <Contact contact={person} />
          </li>
        ))}
      </ul>
    </div>
  );
}