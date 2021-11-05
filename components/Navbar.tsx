import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h2>Categorii</h2>
      <h2>Plante din apartament</h2>
      <h2>Plante medicinale</h2>
    </div>
  );
}

export default Navbar;
