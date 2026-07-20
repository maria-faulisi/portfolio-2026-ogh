declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// document.referrer is only populated on the very first page load of a session —
// client-side route changes never touch it, so it must be captured once, up front,
// to see the full ATS job-posting URL (e.g. boards.greenhouse.io/{company}/jobs/...)
// rather than GA4's default domain-only referrer.
let initialReferrerSent = false;

export const trackPageview = (path: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  const params: Record<string, string> = { page_path: path };

  if (!initialReferrerSent) {
    initialReferrerSent = true;
    if (document.referrer) {
      params.page_referrer = document.referrer;
    }
  }

  window.gtag("event", "page_view", params);
};
