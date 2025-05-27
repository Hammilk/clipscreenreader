function HeroData(props) {
    const { heroName, heroBaseHealth, heroBaseMana, heroBaseArmor } = props;
    return (
    <div className="row d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
                <h1 id="hero-name" className="col-6"> {heroName}</h1>
        </div>
        <div className="row d-flex justify-content-center">
                <h3 className="col-4 d-flex justify-content-end">Base Health: {heroBaseHealth}</h3>
                <h3 className="col-4 d-flex justify-content-center">Base Mana: {heroBaseMana}</h3>
                <h3 className="col-4 d-flex justify-content-start">Base Armor: {heroBaseArmor}</h3>
        </div>
    </div>
    );
}

export default HeroData;
