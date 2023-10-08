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
    question: "O quê é numerologia?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          A numerologia é uma ciência oculta que estuda a influência dos números
          em nossa vida.
        </p>
        <p>
          Através de cálculos matemáticos em base na sua data de nascimento e
          nome, é possível descobrir características da personalidade, talentos,
          pontos fortes e fracos, desafios, habilidades, tendências,
          oportunidades, energias opostas, etc.
        </p>
        <div>
          A numerologia não é:
          <ul className="list-disc list-inside">
            <li>Magia</li>
            <li>Adivinhação</li>
            <li>Superstição</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Qual numerologia é aplicada aqui?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Existem diversas vertentes da numerologia, e aqui é aplicada a
        numerologia pitagórica com modificações baseadas em estudos empíricos e
        de outros numerólogos.
      </div>
    ),
  },
  {
    question: "O quê é astrologia oriental?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          A astrologia ocidental usa o calendario solar e é baseada no zodíaco
          tropical, que considera a posição do sol e outros astros em relação a
          terra. Já a astrologia oriental (chinesa ou vietnamita por exemplo)
          usa o calendario lunissolar (lua e sol) e é baseada em animais e
          elementos do nosso planeta.
        </p>

        <p>
          Através da sua data e hora de nascimento, é possível descobrir o seu
          características da personalidade, talentos, pontos fortes e fracos,
          desafios, habilidades, tendências, oportunidades, energias opostas,
          etc.
        </p>

        <div>
          A astrologia oriental não é:
          <ul className="list-disc list-inside">
            <li>Magia</li>
            <li>Adivinhação</li>
            <li>Superstição</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Qual astrologia oriental é aplicada aqui?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Existem diversas vertentes da astrologia oriental, e aqui é aplicada a
        astrologia vietnamita com modificações baseadas em estudos empíricos e
        de outros astrólogos.
      </div>
    ),
  },
  {
    question: "Isso realmente funciona?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Múltiplas energias nos afetam diariamente e nosso universo possuí
          diversas Leis. Uma delas é a lei do livre arbítrio, que te permite
          fazer suas próprias escolhas (e arcar com as consequências). Outra é a
          lei do eletromagnetismo/atração/karma/etc. que diz que você atrai o
          que você emite/é.
        </p>
        <p>
          Em resumo, numerologia e astrologia são algumas ferramentas que te
          ajudam a entender as tendencias do universo. Não é porque você nasceu
          no dia 28 ou é um caminho de vida 28/1 que você será bilionário. Sem
          usar sua energia (trabalhar, estudar, fazer o bem, etc) você
          dificilmente terá sucesso contínuo.
        </p>
        <p>
          A numerologia e astrologia te fazem entender suas tendencias pessoais
          e as do universo e te ajudar a tomar decisões melhores, mas,{" "}
          <span className="font-bold">
            não são uma receita de bolo ou magia.
          </span>
        </p>
      </div>
    ),
  },
  {
    question: "Eu preciso comprar uma leitura avançada?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          O objetivo desse trabalho é difundir conhecimento sobre o universo
          para resolver problemas e melhorar a vida das pessoas.
        </p>
        <p>
          Nós oferecemos uma{" "}
          <span className="font-bold">leitura simplificada gratuitamente</span>{" "}
          para você testar esse conhecimento antes de se aprofundar nos estudos.
        </p>
        <p>
          Se aprofundando nos estudos você terá{" "}
          <span className="font-bold">todas as informações necessárias</span>
          para fazer uma leitura avançada por conta própria.
        </p>
        <p>
          Se você não tem tempo para estudar a fundo ou está confuso com alguma
          informação, você pode comprar uma leitura avançada para ter uma
          explicação detalhada e personalizada.
        </p>
        <p>
          O dinheiro arrecadado é usado para manter o site no ar, criar novas
          funcionalidades, trazer mais informações e fazer marketing para que
          mais pessoas possam se beneficiar.
        </p>
      </div>
    ),
  },
  {
    question: "Posso pegar um reembolso?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Sim! Você pode pedir um reembolso em até 7 dias depois da sua compra.
        Contate-nos email.
      </div>
    ),
  },
  {
    question: "Tenho uma dúvida que não está aqui",
    answer: (
      <div className="space-y-2 leading-relaxed">Legal, nos envie um email</div>
    ),
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
            Perguntas Frequentes
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
