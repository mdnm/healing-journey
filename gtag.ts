export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ID;

type GtagFunction = (
  type: string,
  event: string,
  payload: { [key: string]: string }
) => void;

type WindowWithGtag = Window & {
  gtag: GtagFunction;
};

const wasGtagInstalled = (window: Window): window is WindowWithGtag => {
  return "gtag" in window && typeof window.gtag === "function";
};

export const pageview = (url: string) => {
  if (!wasGtagInstalled(window) || !GA_TRACKING_ID) return;

  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}) => {
  if (!wasGtagInstalled(window)) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
