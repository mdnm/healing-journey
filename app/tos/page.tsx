import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://app.chatgpt.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent layer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Termos e Condições | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Voltar
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Termos e Condições {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Atualizado Em: 8 de Outubro, 2023

1. Introdução

Bem-vindo ao NumEros, um aplicativo de leitura de numerologia e astrologia oriental. Ao acessar e usar nosso site, localizado em https://numerosapp.com, você concorda em cumprir e estar vinculado aos seguintes termos e condições. Se você não concordar com estes termos, por favor, não use nosso site.

2. Propriedade

Ao comprar uma leitura do NumEros, você é o proprietário das informações fornecidas na leitura. No entanto, você não tem o direito de revender, redistribuir ou usar as informações para fins comerciais sem o consentimento expresso por escrito do NumEros.

3. Coleta de Dados do Usuário

Para fornecer nossos serviços, coletamos os seguintes dados pessoais:

Nome
Email
Data de nascimento
Hora de nascimento
Informações de pagamento
Seus dados são coletados com o máximo cuidado e são protegidos de acordo com nossa política de privacidade, que pode ser encontrada em https://numerosapp.com/privacy-policy.

4. Coleta de Dados Não Pessoais

Usamos cookies da web para melhorar sua experiência de usuário e coletar dados não pessoais para fins de análise e otimização do site.

5. Informações de Contato

Para quaisquer dúvidas, preocupações ou feedback sobre nossos serviços, entre em contato conosco pelo e-mail mateus.nardo@migii.com.br.

6. Lei Aplicável

Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil. Quaisquer disputas decorrentes destes termos estarão sujeitas à jurisdição exclusiva dos tribunais do Brasil.

7. Atualizações dos Termos

Reservamo-nos o direito de atualizar, alterar ou modificar estes termos a qualquer momento. Quando as alterações forem feitas, os usuários serão notificados por e-mail. Seu uso contínuo de nosso site após a implementação de qualquer alteração constitui sua aceitação das mudanças.

Agradecemos por escolher o NumEros. Valorizamos sua confiança e estamos comprometidos em fornecer o melhor serviço possível.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
