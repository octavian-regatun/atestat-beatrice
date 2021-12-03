import { Filters } from "./store";

export function checkFiltersActive(filters: Filters) {
  for (const [key, value] of Object.entries(filters)) {
    if (value) {
      return true;
    }
  }

  return false;
}
