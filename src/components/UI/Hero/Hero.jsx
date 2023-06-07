import "./Hero.styles.scss";

const Hero = ({ title }) => {
  return (
    <div className="hero">
      <h2 className="hero__title">{title}</h2>
    </div>
  );
};

export default Hero;
