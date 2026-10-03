import { useState } from "react"
import DataTable from "../../components/admin/DataTable"
import ImageUploader from "../../components/admin/ImageUploader"
import { Modal, Field, ModalActions, PageHeader, inputCls } from "../../components/admin/adminUI"
import { dummyPromos } from "../../features/promos/dummyData"

const COLUMNS = [
  { key: "title",  label: "Judul",
    render: (v) => <span className="line-clamp-2 max-w-xs block">{v}</span> },
  { key: "start_date", label: "Mulai" },
  { key: "end_date",   label: "Selesai" },
  { key: "is_active",  label: "Aktif",
    render: (v) => (
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${v ? "bg-green-100 text-green-700" : "bg-navy/8 text-navy/40"}`}>
        {v ? "Aktif" : "Nonaktif"}
      </span>
    ),
  },
]

const EMPTY = { title: "", description: "", thumbnail_url: "", service_id: null, start_date: "", end_date: "", is_active: true }

export default function PromosAdmin() {
  const [items, setItems] = useState(dummyPromos)
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
      <PageHeader title="Promo" subtitle={`${items.length} promo`} onAdd={openNew} />
      <DataTable columns={COLUMNS} data={items} onEdit={openEdit} onDelete={(item) => setItems((p) => p.filter((i) => i.id !== item.id))} />

      {editing !== null && (
        <Modal title={editing.id ? "Edit Promo" : "Tambah Promo"} onClose={closeModal}>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <Field label="Judul" required><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
            <Field label="Deskripsi"><textarea className={`${inputCls} resize-none`} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} /></Field>
            <ImageUploader value={form.thumbnail_url} onChange={(url) => setForm({ ...form, thumbnail_url: url ?? "" })} label="Thumbnail" />
            <div className="grid grid-cols-2 gap-3">
              <Field label="Tanggal Mulai"><input type="date" className={inputCls} value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} /></Field>
              <Field label="Tanggal Selesai"><input type="date" className={inputCls} value={form.end_date} onChange={(e) => setForm({ ...form, end_date: e.target.value })} /></Field>
            </div>
            <label className="flex items-center gap-2 text-sm text-navy cursor-pointer">
              <input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} className="accent-primary" />
              Aktif
            </label>
            <ModalActions onClose={closeModal} />
          </form>
        </Modal>
      )}
    </div>
  )
}
