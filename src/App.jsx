import Header from "./components/Header/Header.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import ProductsTitle from "./components/ProductsTitle/ProductsTitle.jsx";
function App() {
  return (
    <div>
      <Header />
      <section id="products">
        <ProductsTitle />
        <Buttons />
        <h3>Selecione um produto</h3>
      </section>
    </div>
  );
}

export default App;
