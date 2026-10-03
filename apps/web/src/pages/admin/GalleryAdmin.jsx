import { useState } from "react"
import DataTable from "../../components/admin/DataTable"
import ImageUploader from "../../components/admin/ImageUploader"
import { Modal, Field, ModalActions, PageHeader, inputCls } from "../../components/admin/adminUI"
import { dummyGallery } from "../../features/gallery/dummyData"

const COLUMNS = [
  { key: "image_url", label: "Gambar",
    render: (v) => v ? <img src={v} alt="" className="w-16 h-10 object-cover rounded border border-navy/8" /> : "—" },
  { key: "caption", label: "Caption",
    render: (v) => <span className="line-clamp-2 max-w-xs block">{v}</span> },
]

const EMPTY = { image_url: "", caption: "" }

export default function GalleryAdmin() {
  const [items, setItems] = useState(dummyGallery)
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
      <PageHeader title="Galeri" subtitle={`${items.length} foto`} onAdd={openNew} />
      <DataTable columns={COLUMNS} data={items} onEdit={openEdit} onDelete={(item) => setItems((p) => p.filter((i) => i.id !== item.id))} />

      {editing !== null && (
        <Modal title={editing.id ? "Edit Foto" : "Tambah Foto"} onClose={closeModal}>
          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <ImageUploader value={form.image_url} onChange={(url) => setForm({ ...form, image_url: url ?? "" })} label="Gambar" />
            <Field label="Caption"><input className={inputCls} value={form.caption} onChange={(e) => setForm({ ...form, caption: e.target.value })} /></Field>
            <ModalActions onClose={closeModal} />
          </form>
        </Modal>
      )}
    </div>
  )
}
