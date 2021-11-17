export default function getCurrentPage(window: Window) {
  const location = window.location.pathname.toLowerCase();

  if (location === "/") {
    return "Home";
  } else if (location.includes("planteDeApartament".toLowerCase())) {
    return "Plante de Apartament";
  } else if (location.includes("planteMedicinale".toLowerCase())) {
    return "Plante de Casa";
  }

  return "t";
}
