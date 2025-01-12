import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const card = useSelector((state) => state.ui.showCard);
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://shoppingapp-dce8b-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cartData),
    });
  }, [cartData]);

  return (
    <Layout>
      {card && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
