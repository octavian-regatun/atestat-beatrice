import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/CustomCard.module.css";
import { useFilterStore } from "../utils/store";

interface Props {
  clickable: boolean;
  href?: string;
  name: string;
  imageSrc: string;
}

function clickableStyles(clickable: boolean) {
  return clickable ? styles.clickable : "";
}

export default function CustomCard({ clickable, name, imageSrc, href }: Props) {
  const [image, setImage] = useState<typeof import("*.jpg") | null>(null);
  const filters = useFilterStore((store) => store.filters);

  useEffect(() => {
    (async () => {
      setImage(await import(`../images/${imageSrc}`));
    })();
  }, []);

  return (
    <Link href={href || ""} passHref>
      <Paper
        elevation={4}
        className={`${styles.container} ${clickableStyles(clickable)}`}
      >
        {image ? (
          <img className={styles.image} src={image.default.src} alt="plant" />
        ) : null}
        <div className={styles.textContainer}>
          <Typography variant="h5">{name}</Typography>
        </div>
      </Paper>
    </Link>
  );
}
