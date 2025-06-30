import Banner from "../components/Banner";
import homeImage from "../assets/homeBanner.png";
import Logements from "../data/logements.json";
import CardGrid from "../components/CardGrid";

export default function Home() {
  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" image={homeImage} />
      <CardGrid data={Logements} />
    </>
  );
}
