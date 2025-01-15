import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import Notification from "./components/UI/Notification";
import {  sendDataCart } from "./store/cardSlice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.ui.showCard);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendDataCart(cartData))
  }, [cartData, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
