import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Hero from "./Hero.jsx";
import Seperator from "./Seperator.jsx";

/* Function to produce mutiple cards within the card component
 */

function CardComponent({ title, data }) {
  return (
    <div className="product-container">
      <h2>{title}</h2>
      <div className="card-container carousel-container">
        {data.map((item) => (
          <Card item={item} id={item.id} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const productCards = Array.from({ length: 5 }, (_, i) => ({
    id: `product-${i + 1}`,
  }));

  const serviceCards = Array.from({ length: 5 }, (_, i) => ({
    id: `service-${i + 1}`,
  }));

  return (
    <>
      <Hero />
      <Header />
      <CardComponent data={productCards} title="Our Products" />
      <Seperator />
      <CardComponent data={serviceCards} title="Our Services" />
      <Seperator />
      <Footer />
    </>
  );
}
export default App;
