import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroData from "../components/HeroData";

function Home() {
  return (
    <div>
      <Header />
      <div className="row d-flex justify-content-center">
        <ul id="nav" className="col-10 col-lg-6">
              <li className="nav-button">
                <Link
                  className="d-flex align-items-center justify-content-center"
                  to="/item"
                >
                  Get Item
                </Link>
              </li>
        </ul>
        <HeroData />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
