import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import planteDeApartamentImport from "../data/planteDeApartamentData.json";
import styles from "../styles/PlanteDeApartamentPage.module.css";
import getCurrentPage from "../utils/getCurrentPage";

let planteDeApartamentData = planteDeApartamentImport;

function renderCustomCards() {
  return planteDeApartamentData.map(x => (
    <CustomCard
      clickable={false}
      name={x.name}
      imageSrc={x.imageSrc}
      key={`${x.name}-${x.imageSrc}`}
    />
  ));
}

export default function PlanteDeApartamentPage() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(getCurrentPage(window));
  }, []);
  return (
    <div className={styles.container}>
      <ResponsiveNavbar currentPage={currentPage} className={styles.navbar} useGradient/>
      <div className={styles.customCards}>{renderCustomCards()}</div>
    </div>
  );
}
