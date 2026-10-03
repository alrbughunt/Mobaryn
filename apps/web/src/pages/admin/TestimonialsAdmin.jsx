import { useState } from "react"
import DataTable from "../../components/admin/DataTable"
import { Modal, Field, ModalActions, PageHeader, inputCls } from "../../components/admin/adminUI"
import { dummyTestimonials } from "../../features/testimonials/dummyData"

const COLUMNS = [
  { key: "customer_name", label: "Nama" },
  { key: "content", label: "Isi",
    render: (v) => <span className="line-clamp-2 max-w-xs block italic text-navy/60">{v}</span> },
  { key: "rating", label: "Rating",
    render: (v) => `${v} ★` },
  { key: "is_published", label: "Tampil",
    render: (v) => (
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${v ? "bg-green-100 text-green-700" : "bg-navy/8 text-navy/40"}`}>
        {v ? "Ya" : "Tidak"}
      </span>
    ),
  },
]

const EMPTY = { customer_name: "", content: "", rating: 5, photo_url: "", is_published: false }

export default function TestimonialsAdmin() {
  const [items, setItems] = useState(
    dummyTestimonials.map((t) => ({ ...t, is_published: false }))
  )
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY)

  function openNew() { setForm(EMPTY); setEditing({}) }
  function openEdit(item) { setForm({ ...item }); setEditing(item) }
  function closeModal() { setEditing(null) }

  function handleSave(e) {
    e.preventDefault()
    if (editing.id) {
      setItems((p) => p.map((i) => i.id === editing.id ? { ...form, id: editing.id } : i))
    } else {
      setItems((p) => [...p, { ...form, id: Date.now() }])
    }
    closeModal()
  }

  return (
    <div className="p-6 sm:p-8 flex flex-col gap-6">
      <PageHeader title="Testimonial" subtitle={`${items.length} ulasan`} onAdd={openNew} />
      <DataTable columns={COLUMNS} data={items} onEdit={openEdit} onDelete={(item) => setItems((p) => p.filter((i) => i.id !== item.id))} />

      {editing !== null && (
        <Modal title={editing.id ? "Edit Testimonial" : "Tambah Testimonial"} onClose={closeModal}>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <Field label="Nama Pelanggan" required><input className={inputCls} value={form.customer_name} onChange={(e) => setForm({ ...form, customer_name: e.target.value })} required /></Field>
            <Field label="Isi Ulasan"><textarea className={`${inputCls} resize-none`} rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} /></Field>
            <Field label="Rating (1–5)">
              <input type="number" min={1} max={5} className={inputCls} value={form.rating} onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })} />
            </Field>
            <Field label="URL Foto (opsional)"><input className={inputCls} value={form.photo_url} onChange={(e) => setForm({ ...form, photo_url: e.target.value })} /></Field>
            <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
              <input type="checkbox" checked={form.is_published} onChange={(e) => setForm({ ...form, is_published: e.target.checked })} className="accent-primary" />
              Tampilkan di website
            </label>
            <ModalActions onClose={closeModal} />
          </form>
        </Modal>
      )}
    </div>
  )
}
