import { useState } from "react"
import DataTable from "../../components/admin/DataTable"
import ImageUploader from "../../components/admin/ImageUploader"
import { Modal, Field, ModalActions, PageHeader, inputCls } from "../../components/admin/adminUI"
import { dummyServices } from "../../features/services/dummyData"

const COLUMNS = [
  { key: "name",  label: "Nama" },
  { key: "slug",  label: "Slug" },
  { key: "short_description", label: "Deskripsi Singkat",
    render: (v) => <span className="line-clamp-2 max-w-xs block">{v}</span> },
  { key: "is_active", label: "Aktif",
    render: (v) => (
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${v ? "bg-green-100 text-green-700" : "bg-navy/8 text-navy/40"}`}>
        {v ? "Aktif" : "Nonaktif"}
      </span>
    ),
  },
]

const EMPTY = {
  name: "", slug: "", short_description: "", long_description: "",
  thumbnail_url: "", whatsapp_template: "", is_active: true, sort_order: 0,
}

export default function ServicesAdmin() {
  const [items, setItems] = useState(dummyServices)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState(EMPTY)

  function openNew() { setForm({ ...EMPTY, sort_order: items.length + 1 }); setEditing({}) }
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
      <PageHeader title="Layanan" subtitle={`${items.length} layanan terdaftar`} onAdd={openNew} />
      <DataTable columns={COLUMNS} data={items} onEdit={openEdit} onDelete={(item) => setItems((p) => p.filter((i) => i.id !== item.id))} />

      {editing !== null && (
        <Modal title={editing.id ? "Edit Layanan" : "Tambah Layanan"} onClose={closeModal}>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <Field label="Nama" required><input className={inputCls} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></Field>
            <Field label="Slug" required><input className={inputCls} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></Field>
            <Field label="Deskripsi Singkat"><textarea className={`${inputCls} resize-none`} rows={2} value={form.short_description} onChange={(e) => setForm({ ...form, short_description: e.target.value })} /></Field>
            <Field label="Deskripsi Lengkap"><textarea className={`${inputCls} resize-none`} rows={4} value={form.long_description} onChange={(e) => setForm({ ...form, long_description: e.target.value })} /></Field>
            <Field label="Template Pesan WhatsApp"><input className={inputCls} value={form.whatsapp_template} onChange={(e) => setForm({ ...form, whatsapp_template: e.target.value })} /></Field>
            <ImageUploader value={form.thumbnail_url} onChange={(url) => setForm({ ...form, thumbnail_url: url ?? "" })} label="Thumbnail" />
            <Field label="Sort Order"><input type="number" className={inputCls} value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} /></Field>
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
