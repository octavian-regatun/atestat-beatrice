import { Popover } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/CategoriiPopoverContent.module.css";

interface categorie {
  name: string;
  content?: categorie[];
}

// capitalize first letter of string
function capitalizeFirstLetter(x: string) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}

const categorii: categorie[] = [
  { name: "arbori", content: [{ name: "decorativi" }, { name: "exotici" }] },
  { name: "arbusti" },
  { name: "conifere" },
  {
    name: "perene",
    content: [
      { name: "hortensii" },
      { name: "carex" },
      { name: "cortaderia" },
      { name: "pennisetum" },
    ],
  },
  {
    name: "plante de interior",
    content: [
      { name: "ferigi" },
      { name: "yucca" },
      { name: "ficusi" },
      { name: "cactusi si succulents" },
    ],
  },
];

export default function CategoriiPopoverContent() {
  const [arboriAnchor, setArboriAnchor] = useState<any>(null);
  const [pereneAnchor, setPereneAnchor] = useState<any>(null);
  const [planteDeInteriorAnchor, setPlanteDeInteriorAnchor] =
    useState<any>(null);

  return (
    <>
      <div
        className={styles.categorie}
        onClick={(e) => setArboriAnchor(e.currentTarget)}
      >
        Arbori
      </div>
      <Popover
        open={!!arboriAnchor}
        anchorEl={arboriAnchor}
        onClose={() => {
          setArboriAnchor(null);
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        classes={{ paper: styles.paperSubcategorie }}
      >
        <div>
          <Link href="/categorii/arbori-decorativi">Decorativi</Link>
        </div>
        <div>
          <Link href="/categorii/arbori-exotici">Exotici</Link>
        </div>
      </Popover>
      <div className={styles.categorie}>
        <Link href="/categorii/arbusti">Arbusti</Link>
      </div>
      <div className={styles.categorie}>
        <Link href="/categorii/conifere">Conifere</Link>
      </div>
      <div
        className={styles.categorie}
        onClick={(e) => setPereneAnchor(e.currentTarget)}
      >
        Perene
      </div>
      <Popover
        open={!!pereneAnchor}
        anchorEl={pereneAnchor}
        onClose={() => {
          setPereneAnchor(null);
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        classes={{ paper: styles.paperSubcategorie }}
      >
        <div>
          <Link href="/categorii/hortensii">Hortensii</Link>
        </div>
        <div>
          <Link href="/categorii/carex">Carex</Link>
        </div>
        <div>
          <Link href="/categorii/cortaderia">Cortaderia</Link>
        </div>
        <div>
          <Link href="/categorii/pennisetum">Pennisetum</Link>
        </div>
      </Popover>
      <div
        className={styles.categorie}
        onClick={(e) => setPlanteDeInteriorAnchor(e.currentTarget)}
      >
        Plante de interior
      </div>
      <Popover
        open={!!planteDeInteriorAnchor}
        anchorEl={planteDeInteriorAnchor}
        onClose={() => {
          setPlanteDeInteriorAnchor(null);
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        classes={{ paper: styles.paperSubcategorie }}
      >
        <div>
          <Link href="/categorii/ferigi">Ferigi</Link>
        </div>
        <div>
          <Link href="/categorii/yucca">Yucca</Link>
        </div>
        <div>
          <Link href="/categorii/ficusi">Ficusi</Link>
        </div>
        <div>
          <Link href="/categorii/cactusi">Cactusi si succulents</Link>
        </div>
      </Popover>
    </>
  );
}
