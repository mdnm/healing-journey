import background2 from "@/public/assets/car.png";
import background1 from "@/public/assets/marriage.png";
import background3 from "@/public/assets/travel.png";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="bg-base-200 w-full">
      <div className="max-w-screen-lg  mx-auto p-8 flex flex-col items-center gap-3">
        <p className="text-2xl font-bold">
          O quê é a numerologia e astrologia oriental?
        </p>

        <p className="text-lg">
          A numerologia é uma ciência oculta que estuda a influência dos números
          em nossa vida. Estamos num mundo onde tudo é energia/frequência e pode
          ser reduzido a um número.
        </p>
        <p className="text-lg">
          A numerologia pode ser aplicada em qualquer coisa (pessoas, animais,
          lugares, objetos). Porém a energia não é definitiva, tudo gira em
          torno de probabilidades e o universo possui outras leis que nos
          afetam. A ideia é utilizar das probabilidades ao nosso favor e cumprir
          nossa missão nessa vida.
        </p>

        <p className="text-lg">
          A astrologia ocidental usa o calendario solar e é baseada no zodíaco
          tropical, que considera a posição do sol e outros astros em relação a
          terra. Já a astrologia oriental (chinesa ou vietnamita por exemplo)
          usa o calendario lunissolar (lua e sol) e é baseada em animais e
          elementos do nosso planeta, por isso ela é{" "}
          <span className="font-bold">muito mais precisa</span>.
        </p>

        <p className="text-lg">
          Através de cálculos matemáticos em base na sua data, hora de
          nascimento e nome, é possível descobrir características da
          personalidade, talentos, pontos fortes e fracos, desafios,
          habilidades, tendências, oportunidades, energias opostas, etc. Além de
          dizer quais horas, meses e anos serão{" "}
          <span className="font-bold">favoráveis ou desfavoráveis</span> para
          você.
        </p>

        <p className="text-xl font-bold">
          A numerologia e astrologia oriental não são:
        </p>
        <ul className="list-disc">
          <li>Magia</li>
          <li>Adivinhação</li>
          <li>Superstição</li>
        </ul>

        <div className="my-3">
          <Image
            src={background1}
            alt="Duas pessoas se casando"
            className="w-[450px] lg:w-full rounded-md"
            priority={true}
            width={1792}
            height={1024}
          />
        </div>

        <p className="mt-5 text-2xl font-bold">
          Como posso usar esse conhecimento ao meu favor?
        </p>

        <p className="text-xl">
          Além do autoconhecimento, você pode usar isso para decidir as melhores
          datas para:
        </p>
        <ul className="list-disc text-lg">
          <li>Se casar</li>
          <li>Ter filhos</li>
          <li>Abrir uma empresa</li>
          <li>Fazer exames</li>
          <li>Receber/Efetuar pagamentos</li>
          <li>Comprar um carro/casa/apartamento</li>
          <li>Comparecer a audiências</li>
          <li>Tirar férias</li>
          <li>Assinar contratos</li>
          <li>etc...</li>
        </ul>
        <div className="my-3">
          <Image
            src={background2}
            alt="Uma pessoa comprando um carro"
            className="w-[450px] lg:w-full rounded-md"
            priority={true}
            width={1792}
            height={1024}
          />
        </div>

        <p className="text-xl">
          Sem contar que você saberá a harmonia energética na hora de:
        </p>
        <ul className="list-disc text-lg">
          <li>Começar um relacionamento</li>
          <li>Se mudar</li>
          <li>Viajar</li>
          <li>Abrir uma sociedade</li>
          <li>Comprar um bem (carro, casa, apartamento)</li>
          <li>Contratar alguém</li>
          <li>Contratar um serviço</li>
          <li>etc...</li>
        </ul>

        <div className="my-3">
          <Image
            src={background3}
            alt="Uma pessoa dentro de um avião viajando"
            className="w-[450px] lg:w-full rounded-md"
            priority={true}
            width={1792}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
