"use client"
import { urlForImage } from "../../../sanity/lib/image";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "@clerk/nextjs";
import { TProduct } from "@/utils/types";


export const AddProductButton = ({ data }: { data: TProduct[] }) => {
  const notify = () =>
    toast.success(
      `${quantity} ${data[0].description} added to cart successfully!`
    );
  const [quantity, setQuantity] = useState(1);
  const { userId } = useAuth();

  useEffect(() => {
    setQuantity(1); // Reset quantity when a new product is displayed
  }, [data]);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      const imageURL = urlForImage(data[0].image).url();
      const existingCartResponse = await fetch("/api/cart");
      const existingCartData = await existingCartResponse.json();
      const existingCartItemIndex = existingCartData.res.findIndex(
        (item: any) =>
          item.product_id === data[0]._id && item.user_id === userId
      );

      if (existingCartItemIndex !== -1) {
        // Product already exists in the cart, update the quantity
        const existingCartItem = existingCartData.res[existingCartItemIndex];
        const updatedQuantity = existingCartItem.quantity + quantity;

        existingCartItem.quantity = updatedQuantity;

        const updateResponse = await fetch("/api/cart", {
          method: "PUT",
          body: JSON.stringify([existingCartItem]),
        });
        console.log(updateResponse);
      } else {
        // Product doesn't exist in the cart, add a new entry
        const res = await fetch("/api/cart", {
          method: "POST",
          body: JSON.stringify({
            product_id: data[0]._id,
            quantity: quantity,
            price: data[0].price,
            title: data[0].description,
            description: data[0].title,
            image: imageURL,
          }),
        });
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <div className="flex flex-col xxs:flex-row gap-8 items-center max-sm:items-start mt-10">
        <h4 className="font-bold text-lg max-sm:mt-2">Quantity:</h4>
        <div className="flex items-center gap-3 font-normal">
          <button
            className="text-3xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer"
            onClick={decrement}
          >
            -
          </button>
          {quantity}
          <button
            className="text-3xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6 mt-10">
        {!userId ? (
          <div>
            <button
              type="button"
              className="bg-black/100 text-white sm:px-12 px-4 py-3 font-semibold flex justify-center gap-x-3 items-center text-sm border disabled:opacity-20"
              disabled
            >
              <FiShoppingCart className="ml-1 h-5 w-6" />
              Add To Cart
            </button>
            <h4 className="flex items-center gap-x-1 text-red-500 font-semibold mt-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="-mt-0.5"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Please Sign In First!
            </h4>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <button
              onClick={() => {
                handleAddToCart();
                notify();
              }}
              type="button"
              className="bg-black/100 text-white sm:px-12 px-4 py-3 font-semibold flex justify-center gap-x-3 items-center text-sm border border-black"
            >
              <FiShoppingCart className="ml-1 h-5 w-6" />
              Add To Cart
            </button>
            <div className="text-2xl font-bold tracking-widest">
              ${data[0].price.toFixed(2)}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default AddProductButton;