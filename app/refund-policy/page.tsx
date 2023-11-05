import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://app.chatgpt.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent layer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Política de Reembolso | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const RefundPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Política de Reembolso de {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Atualizado Em: 5 de Novembro, 2023

Você tem o direito de desistir da sua compra e solicitar um reembolso total dentro de um prazo de 7 dias após o recebimento do produto, sem necessidade de justificar o motivo.

Para iniciar o processo de reembolso, por favor, entre em contato conosco pelo e-mail contato@numerosapp.com ou Whatsapp com o seu pedido. As instruções de como proceder com a devolução do produto e o reembolso serão fornecidas.

Agradecemos a sua escolha pelo NumEros e nos comprometemos a garantir a sua satisfação.

Lembre-se de que esta é uma política de reembolso simplificada e é aconselhável que seja revisada por um profissional jurídico para garantir a conformidade com as leis e regulamentos de comércio eletrônico do Brasil.`}
        </pre>
      </div>
    </main>
  );
};

export default RefundPolicy;