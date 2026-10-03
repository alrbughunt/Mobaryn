// Dummy data — bentuk mengikuti kolom tabel `promos`
// TODO: ganti dengan data dari Supabase di tahap integrasi

export const dummyPromos = [
  {
    id: 1,
    title: "[Promo Placeholder 1]",
    description: "Deskripsi promo placeholder — akan diisi dengan konten promo asli.",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Promo+1",
    service_id: null, // nullable — bisa dikaitkan ke layanan tertentu
    start_date: "2025-02-01",
    end_date: "2025-02-28",
    is_active: true,
  },
  {
    id: 2,
    title: "[Promo Placeholder 2]",
    description: "Deskripsi promo placeholder — akan diisi dengan konten promo asli.",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Promo+2",
    service_id: null,
    start_date: "2025-03-01",
    end_date: "2025-03-31",
    is_active: false,
  },
  {
    id: 3,
    title: "[Promo Placeholder 3]",
    description: "Deskripsi promo placeholder — akan diisi dengan konten promo asli.",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Promo+3",
    service_id: null,
    start_date: "2025-04-01",
    end_date: "2025-04-30",
    is_active: true,
  },
]
