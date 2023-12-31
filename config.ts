import themes from "daisyui/src/theming/themes.js";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "Healing Journey",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription: "Create a perfect and healthy routine that works for you.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "healing-journey.vercel.app",
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId:
          process.env.NODE_ENV === "development"
            ? "price_1NywbBBy6IHSlSgzJKuHoNc0"
            : "price_1O4TMDBy6IHSlSgzaoAvfIXb",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Leitura Avançada (arquivo)",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Entrega em até 48h por email",
        // The price you want to display, the one user will be charged on Stripe.
        price: 188,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 280,
        isFeatured: true,
        features: [
          {
            name: "Caminho de vida",
          },
          { name: "Estágios de vida" },
          { name: "Próximos 5 anos pessoais" },
          { name: "Números harmônicos e desarmônicos" },
          { name: "Gematria (numerologia do nome)" },
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
            : "price_1O4TPMBy6IHSlSgzTNMey7RA",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Leitura Avançada (conversa)",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Conversa online de aprox. 53 min. Mediante a reserva",
        // The price you want to display, the one user will be charged on Stripe.
        price: 350,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: 440,
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
    fromNoReply: `Healing Journey <healingjourneylife@gmail.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Giovana from Healing Journey <healingjourneylife@gmail.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "healingjourneylife@gmail.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "healingjourneylife@gmail.com",
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
