import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { planteMedicinaleData } from "../data/planteMedicinaleData";
import PlanteMedicinale from "../interfaces/planteMedicinaleData.interface";
import styles from "../styles/PlanteDeApartamentPage.module.css";
import { checkFiltersActive } from "../utils/filters";
import getCurrentPage from "../utils/getCurrentPage";
import { useFilterStore } from "../utils/store";

export default function PlanteMedicinalePage() {
  const [currentPage, setCurrentPage] = useState("");
  const filters = useFilterStore((store) => store.filters);

  function nameToLink(name: string) {
    name = name.replace(" ", "-");
    name = name.toLowerCase();

    return name;
  }

  function renderCustomCards() {
    return planteMedicinaleData.map((x) => (
      <CustomCard
        clickable={true}
        name={x.name}
        imageSrc={x.imageSrc}
        key={`${x.name}-${x.imageSrc}`}
        href={`plante/${nameToLink(x.name)}`}
      />
    ));
  }

  useEffect(() => {
    setCurrentPage(getCurrentPage(window));
  }, []);

  return (
    <div className={styles.container}>
      <ResponsiveNavbar
        currentPage={currentPage}
        className={styles.navbar}
        useGradient
      />
      <div className={styles.customCards}>{renderCustomCards()}</div>
    </div>
  );
}
