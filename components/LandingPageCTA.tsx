"use client";

import { useSearchParams } from "next/navigation";

export default function LandingPageCTA() {
  const searchParams = useSearchParams();

  const a = searchParams.get("a") ?? "4gw3gg9HpfyU6ic5kk";

  return (
    <a
      className="btn btn-gradient animate-shimmer text-2xl"
      href={`https://buy.stripe.com/${a}`}
    >
      Quero Mudar Minha Vida
    </a>
  );
}
