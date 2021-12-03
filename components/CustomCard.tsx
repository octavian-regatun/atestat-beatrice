import { Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../styles/CustomCard.module.css";
import { checkFiltersActive } from "../utils/filters";
import { useFilterStore } from "../utils/store";
import Image from "next/image";

interface Props {
  clickable: boolean;
  name: string;
  imageSrc: string;
}

export default function CustomCard({ clickable, name, imageSrc }: Props) {
  const [image, setImage] = useState<typeof import("*.jpg") | null>(null);
  const filters = useFilterStore(store => store.filters);

  function shouldMaxHeight() {
    return checkFiltersActive(filters) ? styles.maxHeight : "";
  }

  useEffect(() => {
    (async () => {
      setImage(await import(`../images/${imageSrc}`));
    })();
  }, []);

  return (
    <Paper elevation={4} className={styles.container}>
      {image ? (
        <img className={styles.image} src={image.default.src} alt="plant" />
      ) : null}
      <div className={styles.textContainer}>
        <Typography variant="h5">{name}</Typography>
      </div>
    </Paper>
  );
}
