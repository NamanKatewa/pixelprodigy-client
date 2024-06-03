import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../variables";
import { useCart } from "../context/cartContext";

const Order = () => {
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const { clearCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sessionIdParam = params.get("sessionId");
    const orderIdParam = params.get("orderId");
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
      setOrderId(orderIdParam);
    }
  }, [location.search]);

  useEffect(() => {
    if (sessionId) {
      console.log(sessionId);
      const confirmOrder = async () => {
        const res = await axios.get(
          `${server}/order/confirm?sessionId=${sessionId}&orderId=${orderId}`
        );
        if (res.status === 200) {
          clearCart();
          window.location.href = "/";
          toast.success("Order Created");
        }
      };
      confirmOrder();
    }
  }, [sessionId, orderId]);

  return <div className="order">Order</div>;
};

export default Order;
