import { useState, useRef } from "react"
import { Upload, X } from "lucide-react"

// TODO: ganti dengan upload ke Supabase Storage bucket "media" di tahap integrasi

/**
 * ImageUploader — file input + local preview using URL.createObjectURL.
 *
 * Props:
 *   value      string  current image URL (from existing data)
 *   onChange   (url: string | null) => void  called with object URL on file pick, null on clear
 *   label      string  optional label text
 */
export default function ImageUploader({ value, onChange, label = "Gambar" }) {
  const inputRef = useRef(null)
  const [preview, setPreview] = useState(value ?? null)

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) return
    // Local preview only — not uploaded anywhere
    const objectUrl = URL.createObjectURL(file)
    setPreview(objectUrl)
    onChange?.(objectUrl)
  }

  function handleClear() {
    setPreview(null)
    onChange?.(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium text-navy/60">{label}</label>

      {preview ? (
        <div className="relative w-full max-w-xs">
          <img
            src={preview}
            alt="Preview"
            className="w-full rounded-[6px] border border-navy/8 object-cover"
            style={{ aspectRatio: "3/2" }}
          />
          <button
            type="button"
            onClick={handleClear}
            className="absolute top-1.5 right-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-navy/8 text-navy/60 hover:text-red-500 transition-colors"
            aria-label="Hapus gambar"
          >
            <X size={12} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 w-full max-w-xs h-28 rounded-[6px] border border-dashed border-navy/20 bg-surface text-navy/40 hover:border-primary/40 hover:text-primary transition-colors text-xs font-medium"
        >
          <Upload size={18} aria-hidden="true" />
          Pilih gambar
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="sr-only"
        aria-label="Upload gambar"
      />
      <p className="text-xs text-navy/30 italic">
        Gambar hanya ditampilkan secara lokal — belum diunggah ke server.
      </p>
    </div>
  )
}
