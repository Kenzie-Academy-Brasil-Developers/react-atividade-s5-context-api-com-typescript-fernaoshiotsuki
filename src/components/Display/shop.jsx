import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { StyledDisplay } from "../../Styles/styles";
import { products } from "../list";

const DisplayProducts = () => {
  const list = products;

  const { addItem } = useContext(CartContext);
  return (
    <StyledDisplay>
      {list.map((item) => {
        return (
          <div>
            <img src={item.image} alt="productImg" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
            <button onClick={() => addItem(item)}>Adicionar</button>
          </div>
        );
      })}
    </StyledDisplay>
  );
};
export default DisplayProducts;
