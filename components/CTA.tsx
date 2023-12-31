import background from "@/app/cta-background.png";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src={background}
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-black bg-opacity-70"></div>
      <div className="relative hero-content text-center text-white p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Don&apos;t know where to start?
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Get this E-book containing all of the information you need 💜
          </p>

          <Link
            href={"https://healingjourneylife.gumroad.com/l/begginerguide"}
            target="_blank"
            className="btn btn-primary btn-wide"
          >
            I Want My Beginners Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
