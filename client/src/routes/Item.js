import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroData from "../components/HeroData";
import { useState, useRef, useEffect } from "react";

function useDidMount() {
    const mountRef = useRef(true);
    useEffect(() => {
        mountRef.current = false;
    }, []);
    return mountRef.current;
}

function Item() {
    const [heroName, setHeroName] = useState("");
    const [heroBaseHealth, setHeroBaseHealth] = useState("");
    const [heroBaseMana, setHeroBaseMana] = useState("");
    const [heroBaseArmor, setHeroBaseArmor] = useState("");


    const loadData = async () => {
        const response = await fetch("http://localhost:8080/item", { method: 'GET'});

        const status = response.status;

        if(status === 200) {
            const responseJSON = await response.json();
            setHeroName(responseJSON.localized_name);
            setHeroBaseHealth(responseJSON.base_health);
            setHeroBaseMana(responseJSON.base_mana);
            setHeroBaseArmor(responseJSON.base_armor);
        } else {
            alert("Error loading item");
        }
    } 

    if(useDidMount()) {
        console.log("mounted");
        loadData();
    }

  return (
    <div>
      <Header />
      <div id="hero-content" className="row d-flex justify-content-center">
        <ul id="nav" className="col-10 col-lg-6">
              <li className="nav-button" onClick={loadData}>
                <Link
                  className="d-flex align-items-center justify-content-center"
                  to="/item"
                >
                  Get Item
                </Link>
              </li>
        </ul>
        <HeroData heroName={heroName} heroBaseHealth={heroBaseHealth} heroBaseMana={heroBaseMana} heroBaseArmor={heroBaseArmor} />
      </div>
      <Footer />
    </div>
  );
}

export default Item;
