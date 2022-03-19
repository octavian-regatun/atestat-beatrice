import {
  AppBar,
  Button,
  ButtonBase,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../styles/ResponsiveNavbar.module.css";
import MenuButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState } from "react";
import CategoriiPopoverContent from "./CategoriiPopoverContent";

interface ResponsiveNavbarProps {
  currentPage: string;
  className?: string;
  useGradient?: boolean;
}

function ResponsiveNavbar({
  currentPage,
  className,
  useGradient = false,
}: ResponsiveNavbarProps) {
  const isMobile = !useMediaQuery("(min-width:600px)");

  return isMobile ? (
    <MobileNavbar currentPage={currentPage} />
  ) : (
    <Navbar className={className} useGradient={useGradient} />
  );
}

interface NavbarProps {
  className: string | undefined;
  useGradient: boolean;
}

function Navbar({ className, useGradient }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCategoriiClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCategoriiClose = () => {
    setAnchorEl(null);
  };

  function shouldUseGradient() {
    return useGradient ? styles.gradient : "";
  }

  return (
    <div className={`${styles.container} ${shouldUseGradient()} ${className}`}>
      <Link href="/" passHref>
        <h2>Acasă</h2>
      </Link>
      <ButtonBase disableRipple={true} onClick={handleCategoriiClick}>
        <h2>Categorii</h2>
      </ButtonBase>
      <Link href="/planteDeApartament" passHref>
        <h2>Plante din apartament</h2>
      </Link>
      <Link href="/planteMedicinale" passHref>
        <h2>Plante medicinale</h2>
      </Link>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handleCategoriiClose}
        classes={{ paper: styles.popoverPaper }}
      >
        <PopoverContent />
      </Popover>
    </div>
  );
}

function PopoverContent() {
  return (
    <div className={styles.popoverContainer}>
      <CategoriiPopoverContent />
    </div>
  );
}

function MobileNavbar({ currentPage }: ResponsiveNavbarProps) {
  return (
    <AppBar position="static" className={styles.mobileNavbar}>
      <Toolbar>
        <MenuButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </MenuButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {currentPage}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveNavbar;
