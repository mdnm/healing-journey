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
  title: `Política de Privacidade | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          Política de Privacidade de {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Atualizado Em: 8 de Outubro, 2023

1. Introdução

Bem-vindo ao NumEros, um aplicativo de leitura de numerologia e astrologia oriental. Esta política de privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar nosso site, localizado em https://numerosapp.com, você concorda com a coleta e uso de informações de acordo com esta política.

2. Coleta de Dados do Usuário

Coletamos os seguintes dados pessoais para fornecer e melhorar nossos serviços:

Nome
Email
Data de nascimento
Hora de nascimento
Informações de pagamento
3. Coleta de Dados Não Pessoais

Usamos cookies da web para melhorar sua experiência de usuário e coletar dados não pessoais para fins de análise e otimização do site.

4. Finalidade da Coleta de Dados

Os dados pessoais que coletamos são usados principalmente para processamento de pedidos. Isso garante que possamos entregar nossos serviços a você de forma eficiente e eficaz.

5. Compartilhamento de Dados

Valorizamos sua privacidade. Não compartilhamos, vendemos ou distribuímos seus dados pessoais para terceiros.

6. Privacidade Infantil

Não coletamos conscientemente informações pessoais de crianças menores de 13 anos. Se você é pai ou responsável e acredita que seu filho nos forneceu informações pessoais, entre em contato conosco imediatamente.

7. Atualizações da Política de Privacidade

Reservamo-nos o direito de atualizar ou alterar nossa política de privacidade a qualquer momento. Quando as alterações forem feitas, os usuários serão notificados por e-mail. Seu uso contínuo de nosso site após a implementação de qualquer alteração constitui sua aceitação das mudanças.

8. Informações de Contato

Para quaisquer dúvidas, preocupações ou feedback sobre nossas práticas de privacidade, entre em contato conosco pelo e-mail mateus.nardo@migii.com.br.

Agradecemos por escolher o NumEros. Estamos comprometidos em proteger sua privacidade e garantir que suas informações pessoais sejam tratadas com cuidado e respeito.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
