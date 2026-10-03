import { useState } from "react"
import DataTable from "../../components/admin/DataTable"
import ImageUploader from "../../components/admin/ImageUploader"
import { Modal, Field, ModalActions, PageHeader, inputCls } from "../../components/admin/adminUI"
import { dummyNews } from "../../features/news/dummyData"

const COLUMNS = [
  { key: "title", label: "Judul",
    render: (v) => <span className="line-clamp-2 max-w-xs block">{v}</span> },
  { key: "slug",  label: "Slug" },
  { key: "published_at", label: "Tanggal",
    render: (v) => v ? new Date(v).toLocaleDateString("id-ID") : "—" },
]

const EMPTY = { title: "", slug: "", excerpt: "", body: "", thumbnail_url: "", published_at: "" }

export default function NewsAdmin() {
  const [items, setItems] = useState(dummyNews)
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
      <PageHeader title="Berita" subtitle={`${items.length} artikel`} onAdd={openNew} />
      <DataTable columns={COLUMNS} data={items} onEdit={openEdit} onDelete={(item) => setItems((p) => p.filter((i) => i.id !== item.id))} />

      {editing !== null && (
        <Modal title={editing.id ? "Edit Artikel" : "Tambah Artikel"} onClose={closeModal}>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <Field label="Judul" required><input className={inputCls} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required /></Field>
            <Field label="Slug" required><input className={inputCls} value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required /></Field>
            <Field label="Ringkasan (Excerpt)"><textarea className={`${inputCls} resize-none`} rows={2} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} /></Field>
            <Field label="Isi Artikel (HTML)"><textarea className={`${inputCls} resize-none font-mono text-xs`} rows={6} value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} /></Field>
            <ImageUploader value={form.thumbnail_url} onChange={(url) => setForm({ ...form, thumbnail_url: url ?? "" })} label="Thumbnail" />
            <Field label="Tanggal Publikasi"><input type="date" className={inputCls} value={form.published_at?.slice(0, 10)} onChange={(e) => setForm({ ...form, published_at: e.target.value })} /></Field>
            <ModalActions onClose={closeModal} />
          </form>
        </Modal>
      )}
    </div>
  )
}
