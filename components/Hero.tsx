import background from "@/app/hero-background.png";
import Image from "next/image";
import Link from "next/link";
import ButtonGradient from "./ButtonGradient";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          Use Holistic Practices to Create the Perfect Routine
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          End the confusion and overwhelm. Get a personalized routine that works
          for you.
        </p>
        <Link href={"/#reading"}>
          <ButtonGradient title="Get Your Personalized Planner" />
        </Link>
      </div>

      <div className="lg:w-full rounded-md">
        <Image
          src={background}
          alt="Background"
          className="w-[400px] lg:w-full rounded-md"
          priority={true}
          width={1792}
          height={1024}
        />
      </div>
    </section>
  );
};

export default Hero;
