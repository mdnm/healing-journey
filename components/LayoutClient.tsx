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
        href="https://www.instagram.com/healingjourney.life/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_21_32)">
            <path
              d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
              fill="url(#paint0_radial_21_32)"
            />
            <path
              d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
              fill="url(#paint1_radial_21_32)"
            />
            <path
              d="M24.0017 5.25C18.9096 5.25 18.2704 5.27231 16.2705 5.36325C14.2744 5.45475 12.9118 5.77069 11.7197 6.23438C10.4863 6.71325 9.44025 7.35394 8.39813 8.39644C7.35506 9.43875 6.71438 10.4848 6.234 11.7176C5.769 12.9101 5.45269 14.2733 5.36287 16.2684C5.27344 18.2685 5.25 18.9079 5.25 24.0002C5.25 29.0925 5.2725 29.7296 5.36325 31.7295C5.45513 33.7256 5.77106 35.0882 6.23438 36.2803C6.71362 37.5137 7.35431 38.5598 8.39681 39.6019C9.43875 40.6449 10.4848 41.2871 11.7173 41.766C12.9103 42.2297 14.2731 42.5456 16.2688 42.6371C18.2689 42.7281 18.9075 42.7504 23.9994 42.7504C29.0921 42.7504 29.7292 42.7281 31.7291 42.6371C33.7253 42.5456 35.0893 42.2297 36.2824 41.766C37.5152 41.2871 38.5597 40.6449 39.6015 39.6019C40.6446 38.5598 41.2851 37.5137 41.7656 36.2809C42.2265 35.0882 42.543 33.7253 42.6367 31.7299C42.7266 29.73 42.75 29.0925 42.75 24.0002C42.75 18.9079 42.7266 18.2689 42.6367 16.2688C42.543 14.2727 42.2265 12.9103 41.7656 11.7182C41.2851 10.4848 40.6446 9.43875 39.6015 8.39644C38.5586 7.35356 37.5156 6.71288 36.2812 6.23456C35.0859 5.77069 33.7226 5.45456 31.7265 5.36325C29.7264 5.27231 29.0897 5.25 23.9959 5.25H24.0017ZM22.3196 8.62894C22.8189 8.62819 23.376 8.62894 24.0017 8.62894C29.0081 8.62894 29.6014 8.64694 31.5784 8.73675C33.4065 8.82038 34.3988 9.12581 35.0597 9.3825C35.9348 9.72225 36.5586 10.1286 37.2144 10.785C37.8707 11.4413 38.2768 12.0662 38.6175 12.9412C38.8742 13.6013 39.18 14.5935 39.2633 16.4216C39.3531 18.3983 39.3726 18.9919 39.3726 23.9959C39.3726 28.9999 39.3531 29.5937 39.2633 31.5701C39.1796 33.3983 38.8742 34.3905 38.6175 35.0507C38.2778 35.9258 37.8707 36.5488 37.2144 37.2047C36.5582 37.8609 35.9351 38.2671 35.0597 38.607C34.3995 38.8648 33.4065 39.1695 31.5784 39.2531C29.6017 39.3429 29.0081 39.3624 24.0017 39.3624C18.9951 39.3624 18.4016 39.3429 16.4252 39.2531C14.5971 39.1688 13.6048 38.8633 12.9433 38.6066C12.0684 38.2667 11.4433 37.8606 10.7871 37.2043C10.1308 36.5481 9.72469 35.9246 9.384 35.0492C9.12731 34.389 8.8215 33.3968 8.73825 31.5686C8.64844 29.592 8.63044 28.9984 8.63044 23.9912C8.63044 18.9842 8.64844 18.3936 8.73825 16.4169C8.82188 14.5888 9.12731 13.5966 9.384 12.9356C9.72394 12.0606 10.1308 11.4356 10.7873 10.7794C11.4435 10.1231 12.0684 9.71681 12.9435 9.37631C13.6044 9.1185 14.5971 8.81381 16.4252 8.72981C18.1549 8.65162 18.8252 8.62819 22.3196 8.62425V8.62894ZM34.0104 11.7422C32.7683 11.7422 31.7604 12.7491 31.7604 13.9914C31.7604 15.2336 32.7683 16.2414 34.0104 16.2414C35.2526 16.2414 36.2604 15.2336 36.2604 13.9914C36.2604 12.7493 35.2526 11.7414 34.0104 11.7414V11.7422ZM24.0017 14.3711C18.6842 14.3711 14.3728 18.6825 14.3728 24.0002C14.3728 29.3179 18.6842 33.6272 24.0017 33.6272C29.3194 33.6272 33.6293 29.3179 33.6293 24.0002C33.6293 18.6827 29.319 14.3711 24.0013 14.3711H24.0017ZM24.0017 17.7501C27.4534 17.7501 30.2518 20.5481 30.2518 24.0002C30.2518 27.4519 27.4534 30.2503 24.0017 30.2503C20.5498 30.2503 17.7518 27.4519 17.7518 24.0002C17.7518 20.5481 20.5498 17.7501 24.0017 17.7501Z"
              fill="white"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_21_32"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(12.75 51.6969) rotate(-90) scale(47.5716 44.2453)"
            >
              <stop stopColor="#FFDD55" />
              <stop offset="0.1" stopColor="#FFDD55" />
              <stop offset="0.5" stopColor="#FF543E" />
              <stop offset="1" stopColor="#C837AB" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_21_32"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-8.04019 3.45769) rotate(78.681) scale(21.2648 87.654)"
            >
              <stop stopColor="#3771C8" />
              <stop offset="0.128" stopColor="#3771C8" />
              <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
            </radialGradient>
            <clipPath id="clip0_21_32">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </>
  );
};

export default ClientLayout;
