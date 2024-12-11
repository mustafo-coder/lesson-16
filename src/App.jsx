import { useContext, useEffect } from "react";
import Counter from "./components/Counter";
import Products from "./components/Products";
import { Context } from "./Context";

const App = () => {
  const { state, setState } = useContext(Context);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setState({ type: "setProducts", payload: json }));
  }, []);
  return (
    <div>
      <h1>My App</h1>
      <Counter />
      <Products />
    </div>
  );
};

export default App;
