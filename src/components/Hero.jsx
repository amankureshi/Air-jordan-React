const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          Your feet deserve <br /> the best
        </h1>
        <p>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam dicta repellendus illum! Corporis inventore
          laudantium dolorem velit. Facilis reprehenderit iusto nesciunt
          consectetur adipisicing elit. Voluptatum, fugiat.
        </p>
        <div className="hero-btn">
          <button className="btn">Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        {/* <div className="shopping">
          <p>also availble on</p>
          <div className="brand-icon">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div> */}
      </div>
      <div className="hero-image">
        <img src="/images/jordan.png" alt="hero-image" />
      </div>
    </main>
  );
};
export default HeroSection;
