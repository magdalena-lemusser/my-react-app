import Banner from "../components/Banner";
import homeImage from "../assets/aboutBanner.png";
import { aboutList } from "../data/aboutList";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <>
      <Banner title="" image={homeImage} extraClass="banner--about" />
      <Collapse
        list={aboutList}
        renderContent={(item) => <p>{item.content}</p>}
      />
    </>
  );
}
