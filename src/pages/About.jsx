import Banner from "../components/Banner";
import homeImage from "../assets/aboutBanner.png";
import { aboutList } from "../data/aboutList";
import Collapse from "../components/Collapse";

export default function About() {
  return (
    <main className="main">
      <Banner title="" image={homeImage} />
      <Collapse
        list={aboutList}
        renderContent={(item) => <p>{item.content}</p>}
      />
    </main>
  );
}
