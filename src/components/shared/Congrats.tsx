"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import fire from '@/components/shared/fire.json';

const Congrats = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2000); // Set the duration for showing the animation (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-1/2 justify-center">
      {showAnimation && <Lottie animationData={fire} />}
    </div>
  );
};

export default Congrats;
