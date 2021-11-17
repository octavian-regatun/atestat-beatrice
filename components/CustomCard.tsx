import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../styles/CustomCard.module.css";

interface Props {
  clickable: boolean;
  name: string;
  imageSrc: string;
}

export default function CustomCard({ clickable, name, imageSrc }: Props) {
  const [image, setImage] = useState<typeof import("*.jpg") | null>(null);

  useEffect(() => {
    (async () => {
      setImage(await import(`../images/${imageSrc}`));
    })();
  }, []);

  return (
    <Card className={styles.container}>
      <CardMedia
        component="img"
        height="150"
        width="200"
        alt="plant"
        src={image?.default.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
