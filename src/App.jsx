import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Hero from "./Hero.jsx";

function CardComponent({ data }) {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Card item={item} />
      ))}
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
      <CardComponent data={cardData} />
      <Footer />
    </>
  );
}
export default App;
