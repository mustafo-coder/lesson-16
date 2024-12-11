import { useContext } from "react";
import { Context } from "../Context";

const Products = () => {
  const {state} = useContext(Context)

  return <div style={{display: "grid", gridTemplateColumns: 4}}>
    {state.products && state.products.map(p => (
      <div key={p.id} style={{padding: 15}}>{p.title}</div>
    ))}
  </div>;
};

export default Products;
