"use client";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";

const AddToCart = () => {
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(cartActions.addToCart({ product: {}, quantity: 1 }));
    toast.success("Product added");
  };
  return <button onClick={addItem} className='px-2 py-5 mt-3 rounded-none text-center text-white font-semibold hover:shadow-md hover:ring-1 ring-slate-400 bg-[#212121]'>Add to Cart</button>
};
export default AddToCart;