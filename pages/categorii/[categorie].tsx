import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import Carousel from "react-material-ui-carousel";
import ResponsiveNavbar from "../../components/ResponsiveNavbar";
import { arboriDecorativiData } from "../../data/categorii/arboriDecorativiData";
import { arboriExoticiData } from "../../data/categorii/arboriExoticiData";
import { arbustiData } from "../../data/categorii/arbustiData";
import { cactusiData } from "../../data/categorii/cactusiData";
import { carexData } from "../../data/categorii/carexData";
import { conifereData } from "../../data/categorii/conifereData";
import { cortaderiaData } from "../../data/categorii/cortaderiaData";
import { ferigiData } from "../../data/categorii/ferigiData";
import { ficusData } from "../../data/categorii/ficusData";
import { hortensiiData } from "../../data/categorii/hortensiiData";
import { pennisetumData } from "../../data/categorii/pennisetumData";
import { yuccaData } from "../../data/categorii/yuccaData";
import styles from "../../styles/Categorie.module.css";

function extractData(categorie: string) {
  switch (categorie) {
    case "arbori-decorativi":
      return arboriDecorativiData;
    case "arbori-exotici":
      return arboriExoticiData;
    case "arbusti":
      return arbustiData;
    case "cactusi":
      return cactusiData;
    case "carex":
      return carexData;
    case "conifere":
      return conifereData;
    case "cortaderia":
      return cortaderiaData;
    case "ferigi":
      return ferigiData;
    case "ficus":
      return ficusData;
    case "pennisetum":
      return pennisetumData;
    case "yucca":
      return yuccaData;
    case "hortensii":
      return hortensiiData;
  }
  return undefined;
}

export default function CategorieNextPage() {
  const router = useRouter();

  const { categorie } = router.query;
  const data = extractData(categorie as string);

  return (
    <div className={styles.container}>
      <ResponsiveNavbar currentPage="" useGradient />
      <div className={styles.content}>
        <Grid container>
          <Grid item xs={6}>
            <h1 className={styles.informatii}>Informatii</h1>
            {data?.textArr.map((text) =>
              text.type === "description" ? (
                <p className={styles.description}>{text.content}</p>
              ) : null
            )}
          </Grid>
          <Grid item xs={6} className={styles.carouselContainer}>
            <Carousel
              className={styles.carousel}
              navButtonsAlwaysVisible
              indicators
            >
              {data?.images.map((image) => (
                <CarouselItem key={image} src={image} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function CarouselItem(props: { src: string }) {
  return (
    <div className={styles.carouselItem}>
      <img src={props.src} alt="poza" className={styles.image} />
    </div>
  );
}
