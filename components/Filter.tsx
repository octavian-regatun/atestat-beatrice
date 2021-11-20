import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import styles from "../styles/Filter.module.css";
import { useFilterStore } from "../utils/store";

export default function Filter() {
  const setFilterValue = useFilterStore(store => store.setFilterValue);

  return (
    <Paper className={styles.container} elevation={3}>
      <Typography variant="h4" className={styles.text}>
        Filtreaza:
      </Typography>
      <div className={styles.checkboxContainer}>
        <Typography variant="h5" className={styles.text}>
          Plante curgatoare
        </Typography>
        <Checkbox
          color="default"
          onChange={(event, value) => {
            setFilterValue("planteCurgatoare", value);
          }}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <Typography variant="h5" className={styles.text}>
          Iubitoare de umbra
        </Typography>
        <Checkbox
          color="default"
          onChange={(event, value) => {
            setFilterValue("iubitoareDeUmbra", value);
          }}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <Typography variant="h5" className={styles.text}>
          Usor de intretinut
        </Typography>
        <Checkbox
          color="default"
          onChange={(event, value) => {
            setFilterValue("usorDeIntretinut", value);
          }}
        />
      </div>
      <div className={styles.checkboxContainer}>
        <Typography variant="h5" className={styles.text}>
          Pet Friendly
        </Typography>
        <Checkbox
          color="default"
          onChange={(event, value) => {
            setFilterValue("petFriendly", value);
          }}
        />
      </div>
    </Paper>
  );
}
