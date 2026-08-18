import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div>
          <h1>Everything You Need for</h1>
          <h2>BAKING & GIFTING</h2>
          <p>High Quality • Best Prices • Wide Variety</p>

          <button>SHOP NOW</button>
          <button>VIEW OFFERS</button>
        </div>

        <div className="hero-image">
          🎂 🎁 🧁
        </div>
      </section>
    </>
  );
}

export default Home;