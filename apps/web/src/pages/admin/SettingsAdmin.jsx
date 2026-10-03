import { useState } from "react"
import { siteConfig } from "../../config/site"
import { Field, inputCls } from "../../components/admin/adminUI"

// TODO: simpan ke tabel settings via Supabase di tahap integrasi

export default function SettingsAdmin() {
  const [form, setForm] = useState({
    whatsappNumber:         siteConfig.whatsappNumber,
    instagramUrl:           siteConfig.instagramUrl,
    address:                siteConfig.address,
    operatingHours:         siteConfig.operatingHours,
    defaultWhatsAppMessage: siteConfig.defaultWhatsAppMessage,
  })
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    // TODO: simpan ke Supabase di tahap integrasi
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-navy">Pengaturan</h1>
        <p className="text-sm text-navy/50">Konfigurasi informasi kontak dan profil situs</p>
      </div>

      <form
        onSubmit={handleSave}
        className="flex flex-col gap-5 bg-white rounded-[8px] border border-navy/8 p-6"
        style={{ maxWidth: "520px" }}
      >
        <Field label="Nomor WhatsApp (tanpa +)">
          <input
            className={inputCls}
            value={form.whatsappNumber}
            onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })}
            placeholder="6281234567890"
          />
          <p className="text-xs text-navy/30 mt-1">Format: kode negara tanpa tanda +, contoh: 6281234567890</p>
        </Field>

        <Field label="URL Instagram">
          <input
            className={inputCls}
            value={form.instagramUrl}
            onChange={(e) => setForm({ ...form, instagramUrl: e.target.value })}
            placeholder="https://instagram.com/..."
          />
        </Field>

        <Field label="Alamat">
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        </Field>

        <Field label="Jam Operasional">
          <input
            className={inputCls}
            value={form.operatingHours}
            onChange={(e) => setForm({ ...form, operatingHours: e.target.value })}
            placeholder="Senin–Sabtu, 08.00–17.00"
          />
        </Field>

        <Field label="Pesan WhatsApp Default">
          <textarea
            className={`${inputCls} resize-none`}
            rows={2}
            value={form.defaultWhatsAppMessage}
            onChange={(e) => setForm({ ...form, defaultWhatsAppMessage: e.target.value })}
          />
        </Field>

        <div className="flex items-center gap-4 pt-2">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-[6px] hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Simpan
          </button>
          {saved && (
            <p className="text-sm text-green-600 font-medium">
              ✓ Perubahan tersimpan (lokal saja — belum terhubung ke database)
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
