import themes from "daisyui/src/theming/themes.js";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "NumEros",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Descubra o que os números dizem sobre você e por que algumas coisas parecem não dar certo.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "numerosapp.com",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "c9b43bf6-fe78-4830-a385-6d7e1aa0d8bd",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1NywbBBy6IHSlSgzJKuHoNc0"
            : "price_1Nz3CUBy6IHSlSgzo76Ne8h1",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Leitura Avançada (arquivo)",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Entrega em até 48h por email",
        // The price you want to display, the one user will be charged on Stripe.
        price: 28,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 80,
        isFeatured: true,
        features: [
          {
            name: "Caminho de vida",
          },
          { name: "Estágio de vida" },
          { name: "Ano pessoal" },
          { name: "Números harmônicos e desarmônicos" },
          { name: "Signos harmônicos e desarmônico" },
          { name: "Meses e horas harmônicas e desarmônicas" },
          {
            name: "Como suas energias se interferem",
          },
          {
            name: "Melhores e piores anos para começar relacionamentos, começar negócios, se casar, ter filhos, etc baseado nos seus estágios de vida, anos pessoais e energias universais",
          },
        ],
        footerText:
          "Para você que está confuso ou não tem tempo para estudar tudo a fundo.",
      },
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1Nyz24By6IHSlSgzrJYDQ36D"
            : "price_1Nz3D1By6IHSlSgzm51J9iEA",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Leitura Avançada (conversa)",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Conversa online de aprox. 53 min. Mediante a reserva",
        // The price you want to display, the one user will be charged on Stripe.
        price: 107,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 206,
        features: [
          {
            name: "O mesmo da leitura avançada por arquivo +",
          },
          {
            name: "Disponibilidade qualquer dia da semana",
          },
          {
            name: "Esclarecimento de acontecimentos passados (traumas, conquistas, percas, etc)",
          },
          {
            name: "Qualquer dúvida específica sobre suas energias",
          },
        ],
        footerText:
          "Para você que deseja tirar o máximo de proveito desse conhecimento.",
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `NumEros <contato@mg.numerosapp.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Mateus do NumEros <contato@mg.numerosapp.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "contato@mg.numerosapp.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "mateus.nardo@migii.com.br",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to _document.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`[data-theme=light]`]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
