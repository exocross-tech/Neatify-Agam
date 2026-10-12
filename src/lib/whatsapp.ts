import { BRAND } from "./constants";

export function getWhatsAppUrl(message?: string): string {
  const text = message ? encodeURIComponent(message) : encodeURIComponent(BRAND.defaultWhatsAppMsg);
  return `${BRAND.whatsappBase}?text=${text}`;
}

export function formatQuoteWhatsAppMsg(details: {
  name?: string;
  service?: string;
  spaceType?: string;
  location?: string;
  preferredTime?: string;
  description?: string;
}): string {
  const lines = [
    "Hello Prakash Bro, I would like to request a quote from NEATIFY AGAM.",
    details.name ? `• Name: ${details.name}` : "",
    details.service ? `• Service Needed: ${details.service}` : "",
    details.spaceType ? `• Space / Home Size: ${details.spaceType}` : "",
    details.location ? `• Location in Chennai: ${details.location}` : "",
    details.preferredTime ? `• Preferred Date / Time: ${details.preferredTime}` : "",
    details.description ? `• Task Details: ${details.description}` : "",
    "",
    "Please share a quote. Thank you!",
  ].filter(Boolean);

  return lines.join("\n");
}
