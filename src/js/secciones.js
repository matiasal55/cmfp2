import { menuResponsive } from "./components/menuResponsive";
import { scrollMenu, contenidos } from "./components/scroll";

menuResponsive();

window.onscroll = () => {
  scrollMenu();
};

const section1 = document.getElementsByClassName("section1")[0];
const section2 = document.getElementsByClassName("section2")[0];

contenidos(section1, 500);
if (section2 != undefined) contenidos(section2, 1000);
