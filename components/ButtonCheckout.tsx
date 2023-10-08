"use client";

import apiClient from "@/libs/api";
import { useState } from "react";

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// By default, user doesn't habe to be logged in. You can change that in the API route
const ButtonCheckout = ({ priceId }: { priceId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-checkout",
        {
          priceId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary btn-block group"
      onClick={() => handlePayment()}
    >
      {isLoading && (
        <span className="loading loading-spinner loading-xs"></span>
      )}
      Receber leitura
    </button>
  );
};

export default ButtonCheckout;
