/**
 * Build a wa.me deep-link URL.
 * @param {string} phoneNumber - E.164-ish number without "+" (e.g. "6281234567890")
 * @param {string} message     - Pre-filled message text (will be URI-encoded)
 * @returns {string} wa.me URL
 */
export function buildWhatsAppLink(phoneNumber, message) {
  const encoded = encodeURIComponent(message ?? "")
  return `https://wa.me/${phoneNumber}?text=${encoded}`
}
