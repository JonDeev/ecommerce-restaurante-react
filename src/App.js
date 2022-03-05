import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import "./App.css";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import { Feacture } from "./components/Feacture";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products Heading='Choose Your Favorite' data={productData} />
      <Feacture />
      <Products Heading='Sweet Treats For You' data={productDataTwo} />
    </Router>
  );
}

export default App;
