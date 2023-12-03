import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import ProductsTitle from "./components/ProductsTitle/ProductsTitle.jsx";
import Product from "./components/Product/Product.jsx";

import { PRODUCTS_DATA } from "./data.js";

function App() {
  const [productValue, setProductValue] = useState(null);
  let productContent = <h3>Selecione um produto</h3>;

  if (productValue !== null) {
    productContent = <Product {...PRODUCTS_DATA[productValue]} />;
  }
  const handleClick = function (ident) {
    setProductValue(ident);
  };
  return (
    <div>
      <Header />
      <section id="products">
        <ProductsTitle />
        <Buttons handleClick={handleClick} btnValue={productValue} />
        {productContent}
      </section>
    </div>
  );
}

export default App;
