import config from "@/config";
import testimonial1 from "@/public/assets/testimonial 1.jpeg";
import testimonial2 from "@/public/assets/testimonial 2.png";
import testimonial3 from "@/public/assets/testimonial 3.png";
import testimonial4 from "@/public/assets/testimonial 4.png";
import testimonial5 from "@/public/assets/testimonial 5.png";
import testimonial6 from "@/public/assets/testimonial 6.jpeg";
import Image, { StaticImageData } from "next/image";

const testimonials: StaticImageData[][] = [
  [testimonial6, testimonial3],
  [testimonial5, testimonial4],
  [testimonial2, testimonial1],
];

// A single testimonial, to be rendered in  a list
const Testimonial = ({
  testimonial,
  i,
}: {
  testimonial: StaticImageData;
  i: number;
}) => {
  return (
    <li key={i}>
      <div className="overflow-hidden bg-base-300 shrink-0">
        <Image
          className="w-full object-cover"
          src={testimonial}
          alt={`Review #${i} do ${config.appName}`}
          width={200}
          height={150}
        />
      </div>
    </li>
  );
};

const Testimonials11 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
              Muitas vidas já foram transformadas!
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
            Aqui estão alguns relatos de pessoas que receberam leituras
          </p>
        </div>

        {testimonials.map((row, i) => (
          <ul
            role="list"
            className="flex justify-center flex-col sm:flex-row gap-6 sm:gap-8 mb-6"
            key={`row-${i}`}
          >
            {row.map((e, j) => (
              <Testimonial
                key={`row-${i}-item-${j}`}
                testimonial={e}
                i={i + j}
              />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Testimonials11;
