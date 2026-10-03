/**
 * Shared admin UI primitives — Modal, Field, ModalActions, input class.
 * Used across all CRUD admin pages.
 */
import { X } from "lucide-react"

export const inputCls =
  "w-full px-3 py-2 text-sm rounded-[6px] border border-navy/8 bg-white text-navy outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition"

export function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-navy/60">
        {label}
        {required && " *"}
      </label>
      {children}
    </div>
  )
}

export function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-8 px-4 bg-navy/20">
      <div
        className="relative w-full bg-white rounded-[8px] border border-navy/8 flex flex-col"
        style={{ maxWidth: "560px" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-navy/8">
          <h2 className="text-sm font-semibold text-navy">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-navy/40 hover:text-navy transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
            aria-label="Tutup"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto" style={{ maxHeight: "70vh" }}>
          {children}
        </div>
      </div>
    </div>
  )
}

export function ModalActions({ onClose }) {
  return (
    <div className="flex gap-3 pt-2 border-t border-navy/8 mt-2">
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-[6px] hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Simpan
      </button>
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium text-navy/60 border border-navy/8 rounded-[6px] hover:bg-navy/5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      >
        Batal
      </button>
    </div>
  )
}

export function PageHeader({ title, subtitle, onAdd }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-semibold text-navy">{title}</h1>
        {subtitle && <p className="text-sm text-navy/50">{subtitle}</p>}
      </div>
      {onAdd && (
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary rounded-[6px] hover:bg-primary/90 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          + Tambah
        </button>
      )}
    </div>
  )
}
