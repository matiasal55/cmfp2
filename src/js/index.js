import { scrollMenu, scrollSection } from "./components/scroll";
import { menuResponsive } from "./components/menuResponsive";

const scrollSection1 = 250;
const scrollSection2 = screen.height * 0.4;
const section1 = document.getElementsByClassName("section1")[0];
const section2 = document.getElementsByClassName("section2")[0];

menuResponsive();

window.onscroll = () => {
  scrollMenu();
  scrollSection(section1, scrollSection1);
  scrollSection(section2, scrollSection2);
};
