import create from "zustand";
import { devtools } from "zustand/middleware";

export type FiltersKeys =
  | "planteCurgatoare"
  | "iubitoareDeUmbra"
  | "usorDeIntretinut"
  | "petFriendly";

export type Filters = Record<FiltersKeys, boolean>;

interface FilterState {
  filters: Filters;
  setFilterValue(filter: FiltersKeys, value: boolean): void;
}

export const useFilterStore = create<FilterState>(
  devtools(set => ({
    filters: {
      planteCurgatoare: false,
      iubitoareDeUmbra: false,
      usorDeIntretinut: false,
      petFriendly: false,
    },
    setFilterValue: (filter, value) =>
      set(state => {
        const newFilters = { ...state.filters };
        newFilters[filter] = value;

        return { filters: newFilters };
      }),
  }))
);
