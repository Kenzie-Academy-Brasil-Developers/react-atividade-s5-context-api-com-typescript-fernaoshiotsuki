import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { StyledCart } from "../../Styles/styles";

const DisplayCart = () => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <>
      <StyledCart>
        {cart.map((item) => {
          return (
            <div>
              <img src={item.image} alt="productImg" />
              <h4>{item.title}</h4>

              <h3>{item.price}</h3>
              <button onClick={() => removeItem(item)}>Remover</button>
            </div>
          );
        })}
      </StyledCart>
    </>
  );
};
export default DisplayCart;
