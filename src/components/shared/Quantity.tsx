"use client";

import React, { useState } from "react";

const Quantity = () => {
    const [num, setNum] = useState(1);

    return (
        <div className="flex items-center gap-x-2">
            {/* Minus */}
            <button
                onClick={() => {
                    setNum(num <= 1 ? 1 : num - 1);
                }}
                className="w-8 h-8 border text-xl rounded-full _center"
            >
                -
            </button>
            {/* Number */}
            <span className="text-xl">{num}</span>
            {/* Plus */}
            <button
                className="w-8 h-8 border text-xl rounded-full _center"
                onClick={() => {
                    setNum(num + 1);
                }}
            >
                +
            </button>
        </div>
    );
};

export default Quantity;

// export const OpreationButton = () => {
//   return <div className="w-6 h-6 border rounded-full center">-</div>;
// };