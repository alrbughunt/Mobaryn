import { Pencil, Trash2 } from "lucide-react"

/**
 * Generic reusable data table for admin CRUD pages.
 *
 * Props:
 *   columns  { key: string, label: string, render?: (value, row) => ReactNode }[]
 *   data     object[]
 *   onEdit   (item) => void
 *   onDelete (item) => void
 */
export default function DataTable({ columns, data, onEdit, onDelete }) {
  function handleDelete(item) {
    if (window.confirm("Hapus item ini?")) {
      onDelete(item)
    }
  }

  if (data.length === 0) {
    return (
      <div className="rounded-[8px] border border-navy/8 bg-surface px-6 py-12 text-center text-sm text-navy/40">
        Belum ada data.
      </div>
    )
  }

  return (
    <div className="rounded-[8px] border border-navy/8 overflow-x-auto">
      <table className="w-full text-sm text-left min-w-[540px]">
        <thead className="bg-surface border-b border-navy/8">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 font-medium text-navy/60 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
            <th className="px-4 py-3 font-medium text-navy/60 text-right whitespace-nowrap">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.id ?? idx}
              className="border-b border-navy/8 last:border-0 hover:bg-surface/60 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-navy/80 align-top">
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? "—")}
                </td>
              ))}
              <td className="px-4 py-3 text-right whitespace-nowrap">
                <div className="inline-flex gap-2">
                  <button
                    type="button"
                    onClick={() => onEdit(row)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[6px] text-xs font-medium border border-navy/8 text-navy/70 hover:border-primary/40 hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={`Edit item ${row.id ?? idx}`}
                  >
                    <Pencil size={12} aria-hidden="true" />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(row)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[6px] text-xs font-medium border border-navy/8 text-navy/70 hover:border-red-400/40 hover:text-red-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                    aria-label={`Hapus item ${row.id ?? idx}`}
                  >
                    <Trash2 size={12} aria-hidden="true" />
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
