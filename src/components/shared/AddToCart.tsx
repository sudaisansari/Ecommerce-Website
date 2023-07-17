"use client";

import { cartActions } from "@/store/slice/cartSlice";
import { Button } from "@/components/shared/Button";
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux'

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  }
  return <Button className="rounded-none text-center text-lg text-white w-36 hover:shadow-md hover:ring-1 ring-slate-400 bg-[#212121]"
    onClick={addItem}>Add to Cart</Button>;
};
export default AddToCart;