import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";
import { planteMedicinaleData } from "../../data/planteMedicinaleData";
import PlanteMedicinaleData from "../../interfaces/planteMedicinaleData.interface";
import styles from "../../styles/Planta.module.css";

export default function Planta() {
  const [image, setImage] = useState<any>(null);
  const router = useRouter();

  const { planta } = router.query;

  useEffect(() => {
    (async () => {
      getImage(planteMedicinaleData)
        ? setImage(
            await import(`../../images/${getImage(planteMedicinaleData)}`)
          )
        : null;
    })();
  }, [planta]);

  function getTitle(planta?: string) {
    if (!planta) return "";

    planta = planta.replace("-", " ");
    let words = planta.split(" ");
    let title = "";

    for (let word of words) {
      word = word.charAt(0).toUpperCase() + word.slice(1);

      title += word + " ";
    }

    return title.trim();
  }

  function getImage(data: PlanteMedicinaleData[]) {
    for (const item of data) {
      if (item.name === getTitle(planta as string)) {
        return item.imageSrc;
      }
    }

    return "";
  }

  function getDescription(data: PlanteMedicinaleData[]) {
    for (const item of data) {
      if (item.name === getTitle(planta as string)) {
        return item.description;
      }
    }

    return "";
  }

  return (
    <div className={styles.container}>
      <ResponsiveNavbar currentPage="" useGradient />
      <Grid container className={styles.contentContainer}>
        <Paper className={styles.content}>
          <Grid container>
            <Grid item xs={6}>
              <h1 className={styles.titlu}>{getTitle(planta as string)}</h1>
              <p className={styles.description}>
                {getDescription(planteMedicinaleData)}
              </p>
            </Grid>
            <Grid item xs={6} className={styles.imageContainer}>
              <img
                src={image?.default?.src}
                alt="poza"
                className={styles.image}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
