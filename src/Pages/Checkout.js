import React from "react";
import "./Checkout.scss";
import { useCart } from "../context/cartContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../variables";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string(),
  email: yup.string().email("Email is invalid").required("Email is required"),
  addressLine1: yup.string().required("Address Line 1 is required"),
  addressLine2: yup.string().required("Address Line 2 is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required").oneOf(["India"]),
  postalCode: yup.string().required("Postal Code is required"),
  contactNumber: yup
    .string()
    .required("Contact Number is required")
    .matches(/^\d{10}$/, "Contact Number should be 10 digits."),
});

const Checkout = () => {
  const { cart } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    if (cart.length !== 0) {
      const res = await axios.post(`${server}/order/checkout`, {
        items: cart,
        email: data.email,
        name: `${data.firstName} ${data.lastName && data.lastName}`,
        address: {
          line1: data.addressLine1,
          line2: data.addressLine2,
          city: data.city,
          state: data.state,
          country: data.country,
          postal_code: data.postalCode,
        },
        number: `+91 ${data.contactNumber}`,
      });
      if (res.status === 200) {
        toast.success("Order Recieved");
      } else {
        toast.error("Could not Create your Order, Try Again.");
      }
    }
  };

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="section">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" {...register("firstName")} />
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor="contactNumber">Contact Number</label>
          <div className="contact">
            <span>+91</span>
            <input
              id="contactNumber"
              type="tel"
              {...register("contactNumber")}
              style={{ marginLeft: "5px" }}
            />
          </div>
          {errors.contactNumber && <span>{errors.contactNumber.message}</span>}
        </div>

        <div className="section">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input id="addressLine1" {...register("addressLine1")} />
          {errors.addressLine1 && <span>{errors.addressLine1.message}</span>}
          <label htmlFor="addressLine2">Address Line 2</label>
          <input id="addressLine2" {...register("addressLine2")} />
          {errors.addressLine2 && <span>{errors.addressLine2.message}</span>}
          <label htmlFor="city">City</label>
          <input id="city" {...register("city")} />
          {errors.city && <span>{errors.city.message}</span>}
          <label htmlFor="state">State</label>
          <input id="state" {...register("state")} />
          {errors.state && <span>{errors.state.message}</span>}
          <label htmlFor="country">Country</label>
          <input
            id="country"
            defaultValue="India"
            readOnly
            {...register("country")}
          />
          {errors.country && <span>{errors.country.message}</span>}
          <label htmlFor="postalCode">Postal Code</label>
          <input id="postalCode" {...register("postalCode")} />
          {errors.postalCode && <span>{errors.postalCode.message}</span>}
        </div>

        <button
          type="submit"
          onClick={() => {
            if (cart.length === 0) toast.error("No items in the cart");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
