import { useEffect, useState } from "react";
import CustomCard from "../components/CustomCard";
import Filter from "../components/Filter";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import { planteDeApartamentData } from "../data/planteDeApartamentData";
import PlanteDeApartamentData from "../interfaces/planteDeApartamentData";
import styles from "../styles/PlanteDeApartamentPage.module.css";
import { checkFiltersActive } from "../utils/filters";
import getCurrentPage from "../utils/getCurrentPage";
import { useFilterStore } from "../utils/store";

export default function PlanteDeApartamentPage() {
  const [currentPage, setCurrentPage] = useState("");
  const filters = useFilterStore(store => store.filters);

  function renderCustomCards() {
    let planteDeApartamentDataFiltered: PlanteDeApartamentData[];

    if (checkFiltersActive(filters)) {
      planteDeApartamentDataFiltered = planteDeApartamentData.filter(x => {
        for (const category of x.categories) {
          if (filters[category]) {
            return true;
          }
        }
        return false;
      });
    } else {
      planteDeApartamentDataFiltered = planteDeApartamentData;
    }

    return planteDeApartamentDataFiltered.map(x => {
      return (
        <CustomCard
          clickable={false}
          name={x.name}
          imageSrc={x.imageSrc}
          key={`${x.name}-${x.imageSrc}`}
        />
      );
    });
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
      <Filter />
      <div className={styles.customCards}>{renderCustomCards()}</div>
    </div>
  );
}
