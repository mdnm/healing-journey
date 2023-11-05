"use client";

import config from "@/config";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Tooltip } from "react-tooltip";

// All the client wrappers are here (they can't be in server components)
// 1. NextTopLoader: Show a progress bar at the top when navigating between pages
// 2. Toaster: Show Success/Error messages anywhere from the app with toast()
// 3. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// 4. CrispChat: Set Crisp customer chat support (see above)
const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* Show a progress bar at the top when navigating between pages */}
      <NextTopLoader color={config.colors.main} showSpinner={false} />

      {/* Content inside app/page.js files  */}
      {children}

      {/* Show Success/Error messages anywhere from the app with toast() */}
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />

      {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
      <Tooltip
        id="tooltip"
        className="z-[60] !opacity-100 max-w-sm shadow-lg"
      />

      {/* Add Whatsapp Button */}
      <a
        href="https://wa.me/393668717788?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20do%20NumEros."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <svg
          width="57"
          height="58"
          viewBox="0 0 57 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_939_7)">
            <path
              d="M1.21664 28.653C1.2153 33.5262 2.47643 38.2844 4.87443 42.4784L0.987305 56.808L15.5116 52.9629C19.5288 55.171 24.0298 56.328 28.6038 56.3283H28.6158C43.7152 56.3283 56.0065 43.9228 56.0129 28.6748C56.0158 21.2861 53.1685 14.3383 47.9953 9.11109C42.823 3.88434 35.944 1.00435 28.6147 1.00098C13.5135 1.00098 1.2231 13.4058 1.21686 28.653"
              fill="url(#paint0_linear_939_7)"
            />
            <path
              d="M0.238242 28.6439C0.236683 33.6924 1.543 38.6208 4.02651 42.965L0 57.8082L15.0451 53.8253C19.1905 56.1074 23.8578 57.3105 28.607 57.3123H28.6193C44.2604 57.3123 56.9932 44.4606 56.9999 28.6668C57.0026 21.0126 54.0528 13.815 48.6948 8.40056C43.3362 2.98678 36.2112 0.00314729 28.6193 0C12.9755 0 0.244476 12.8499 0.238242 28.6439ZM9.19791 42.2168L8.63615 41.3165C6.27466 37.5253 5.02824 33.1443 5.03002 28.6457C5.03514 15.5181 15.6166 4.83783 28.6282 4.83783C34.9294 4.84053 40.8511 7.32059 45.3051 11.8203C49.7589 16.3205 52.2097 22.3026 52.2081 28.665C52.2023 41.7926 41.6206 52.4743 28.6193 52.4743H28.6099C24.3766 52.472 20.2247 51.3242 16.6039 49.155L15.7422 48.6391L6.81416 51.0025L9.19791 42.2166V42.2168Z"
              fill="url(#paint1_linear_939_7)"
            />
            <path
              d="M21.5258 16.6688C20.9946 15.4767 20.4355 15.4526 19.9303 15.4317C19.5166 15.4137 19.0437 15.4151 18.5712 15.4151C18.0983 15.4151 17.3299 15.5947 16.6804 16.3107C16.0303 17.0274 14.1982 18.7593 14.1982 22.2818C14.1982 25.8045 16.7394 29.2087 17.0937 29.6869C17.4483 30.1641 21.9994 37.6241 29.2072 40.494C35.1976 42.879 36.4166 42.4046 37.7167 42.285C39.017 42.1659 41.9124 40.5536 42.5031 38.8817C43.0943 37.21 43.0943 35.7771 42.9171 35.4777C42.7398 35.1793 42.2669 35.0002 41.5577 34.6423C40.8484 34.2842 37.362 32.552 36.7121 32.3131C36.0619 32.0743 35.5892 31.9552 35.1163 32.6721C34.6434 33.3879 33.2854 35.0002 32.8715 35.4777C32.458 35.9563 32.0441 36.0159 31.3352 35.6577C30.6256 35.2985 28.3418 34.5434 25.6323 32.1044C23.5242 30.2066 22.101 27.863 21.6873 27.1461C21.2736 26.4303 21.643 26.0423 21.9985 25.6856C22.3172 25.3648 22.7079 24.8495 23.0628 24.4316C23.4164 24.0135 23.5344 23.7151 23.7709 23.2376C24.0076 22.7597 23.8891 22.3416 23.7121 21.9835C23.5344 21.6253 22.1564 18.0844 21.5258 16.6688Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_939_7"
              x1="2752.27"
              y1="5581.7"
              x2="2752.27"
              y2="1.00098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1FAF38" />
              <stop offset="1" stop-color="#60D669" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_939_7"
              x1="2849.99"
              y1="5780.82"
              x2="2849.99"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9F9F9" />
              <stop offset="1" stop-color="white" />
            </linearGradient>
            <clipPath id="clip0_939_7">
              <rect width="57" height="58" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
};

export default ClientLayout;
