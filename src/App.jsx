import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Hero from "./Hero.jsx";
import Seperator from "./Seperator.jsx";

function CardComponent({ title, data }) {
  return (
    <div className="product-container">
      <h2>{title}</h2>
      <div className="card-container">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const cardData = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    content: `This is item ${i + 1}`,
  }));

  return (
    <>
      <Hero />
      <Header />
      <CardComponent data={cardData} title="Our Products" />
      <Seperator/>
      <CardComponent data={cardData} title="Our Services" />
      <Footer />
    </>
  );
}
export default App;
