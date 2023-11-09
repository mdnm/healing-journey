"use client";

import type { JSX } from "react";
import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What are Holistic Practices?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          &quot;The whole is greater than the sum of its parts&quot; perfectly
          captures the essence of holism, as it highlights the interconnections
          among the mind, body, and environment.
        </p>
        <p>
          For instance, holistic recognition initially identifies the primary
          daily challenge before stepping back to comprehend the
          individual&apos;s life in its entirety, recognizing its patterns.
        </p>
        <p>
          Each individual faces unique struggles, both physical and mental, and
          has their own attractions to certain practices and beliefs.
          Understanding these personal nuances is crucial in selecting habits
          that will genuinely enhance their health and happiness.
        </p>
        <p>
          This approach is preferable to imposing generic activities that, while
          intended to help, often fail to effect change and can sometimes
          exacerbate the situation.
        </p>
      </div>
    ),
  },
  {
    question: "What is the foundation for creating routines?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          I combined 6 years of experience in practicing and applying yoga,
          Ayurveda, NLP (neuro-linguistic programming), Reiki, among other
          studies and practices tested by myself and with my yoga students.
        </p>
      </div>
    ),
  },
  {
    question: "Are there any contraindications?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          The recommendations include habits that anyone can be perform. For
          example the best time to exercise.
        </p>
        <p>
          If you have any questions or concerns about your specific condition or
          disability, consult a healthcare professional before carrying out the
          practices.
        </p>
      </div>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Yes! You can get a refund up to 7 days after making a purchase of any
        product/service. Contact us via email or Instagram.
      </div>
    ),
  },
  {
    question: "I have a question not listed here",
    answer: <div className="space-y-2 leading-relaxed">Cool, email us</div>,
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-white" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
