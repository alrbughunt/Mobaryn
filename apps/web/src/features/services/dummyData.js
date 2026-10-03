// Dummy data — bentuk mengikuti kolom tabel `services`
// TODO: ganti dengan data dari Supabase di tahap integrasi

export const dummyServices = [
  {
    id: 1,
    name: "Tune Up Mesin",
    slug: "tune-up-mesin",
    short_description: "Perawatan rutin mesin agar performa kendaraan tetap optimal.",
    long_description:
      "Tune up mesin adalah perawatan berkala yang memastikan semua komponen pengapian dan suplai bahan bakar bekerja dengan baik. Proses mencakup pemeriksaan busi, filter udara, filter bahan bakar, dan penyetelan timing mesin. Dikerjakan langsung di lokasi Anda tanpa perlu membawa kendaraan ke bengkel.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Tune+Up",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Tune Up Mesin untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 1,
  },
  {
    id: 2,
    name: "Ganti Oli & Filter",
    slug: "ganti-oli-filter",
    short_description: "Penggantian oli mesin dan filter untuk menjaga kesehatan mesin.",
    long_description:
      "Penggantian oli mesin secara rutin adalah salah satu perawatan terpenting untuk menjaga performa dan umur mesin kendaraan. Kami menggunakan oli sesuai spesifikasi kendaraan Anda dan mengganti filter oli secara bersamaan. Proses dilakukan di lokasi Anda tanpa meninggalkan kendaraan.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Ganti+Oli",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Ganti Oli & Filter untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 2,
  },
  {
    id: 3,
    name: "Servis Rem",
    slug: "servis-rem",
    short_description: "Pemeriksaan dan penggantian komponen rem untuk keamanan berkendara.",
    long_description:
      "Sistem rem yang berfungsi baik adalah prioritas keselamatan. Layanan servis rem kami mencakup pemeriksaan kampas rem, cakram, kaliper, dan minyak rem. Kondisi komponen akan diperiksa dan dijelaskan kepada Anda sebelum pengerjaan dimulai.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Servis+Rem",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Servis Rem untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 3,
  },
  {
    id: 4,
    name: "Pemeriksaan AC Mobil",
    slug: "servis-ac",
    short_description: "Pengecekan dan perbaikan sistem pendingin kabin kendaraan.",
    long_description:
      "AC yang tidak dingin atau berbau bisa mengganggu kenyamanan berkendara. Layanan ini mencakup pemeriksaan tekanan freon, kondisi kompresor, kondensor, dan evaporator. Estimasi perbaikan disampaikan sebelum pengerjaan dilakukan.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Servis+AC",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Pemeriksaan AC Mobil untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 4,
  },
  {
    id: 5,
    name: "Ganti Aki",
    slug: "ganti-aki",
    short_description: "Penggantian aki kendaraan yang tidak lagi menyimpan daya dengan baik.",
    long_description:
      "Aki yang lemah dapat menyebabkan kendaraan susah dihidupkan atau sistem kelistrikan tidak stabil. Kami memeriksa kondisi aki Anda terlebih dahulu dan memberikan rekomendasi penggantian jika diperlukan. Tersedia beberapa pilihan merek aki sesuai kebutuhan dan anggaran.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Ganti+Aki",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Ganti Aki untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 5,
  },
  {
    id: 6,
    name: "Pemeriksaan Kelistrikan",
    slug: "servis-kelistrikan",
    short_description: "Diagnosa dan perbaikan sistem kelistrikan kendaraan.",
    long_description:
      "Masalah kelistrikan pada kendaraan bisa beragam — mulai dari lampu yang tidak menyala, sekring putus, hingga masalah sensor. Kami melakukan diagnosa menggunakan alat scan untuk membaca kode error sebelum menentukan langkah perbaikan.\n\n[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]",
    thumbnail_url: "https://placehold.co/480x320/e2e8f0/64748b?text=Kelistrikan",
    whatsapp_template:
      "Halo Mobaryn, saya ingin memesan layanan Pemeriksaan Kelistrikan untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.",
    is_active: true,
    sort_order: 6,
  },
]
