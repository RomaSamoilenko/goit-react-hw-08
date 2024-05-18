import { useDispatch } from "react-redux";
import styles from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.labelElement} htmlFor="input-element">
        Find contacts by name or number
      </label>
      <input
        onChange={handleSearch}
        className={styles.inputElement}
        type="text"
        id="input-element"
      />
    </div>
  );
}