import Banner from "../components/Banner";
import homeImage from "../assets/homeBanner.png";

export default function Home() {
  return (
    <main className="main">
      <Banner title="Chez vous, partout et ailleurs" image={homeImage} />
    </main>
  );
}
