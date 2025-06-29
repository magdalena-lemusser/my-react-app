import { Outlet } from "react-router-dom"; // composant systeme de ReactRouter
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/main.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
