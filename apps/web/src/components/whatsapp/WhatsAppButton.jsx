import { MessageCircle } from "lucide-react"
import Button from "../ui/Button"
import { buildWhatsAppLink } from "../../lib/whatsapp"
import { siteConfig } from "../../config/site"

/**
 * WhatsAppButton — opens wa.me with a pre-filled message.
 *
 * Props:
 *   message  string  — overrides siteConfig.defaultWhatsAppMessage when provided
 */
export default function WhatsAppButton({ message }) {
  const href = buildWhatsAppLink(
    siteConfig.whatsappNumber,
    message ?? siteConfig.defaultWhatsAppMessage
  )

  return (
    <Button
      variant="primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle size={16} aria-hidden="true" />
      WhatsApp
    </Button>
  )
}
