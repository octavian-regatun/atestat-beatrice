import { FiltersKeys } from "../utils/store";

export default interface PlanteDeApartamentData {
  name: string;
  imageSrc: string;
  categories: FiltersKeys[];
}
