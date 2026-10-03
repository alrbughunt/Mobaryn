-- seed.sql
-- Development seed data for Mobaryn.
--
-- VALUES INTENTIONALLY MATCH the dummy data used during frontend development
-- (apps/web/src/features/*/dummyData.js) so that once the frontend is wired
-- to Supabase the UI renders identically to what was tested with local state.
--
-- author_id on news rows is NULL — no admin user exists yet at this stage.
-- TODO: update author_id once admin account is provisioned in auth.users.
--
-- All placeholder text is clearly marked. Replace with real content before launch.
-- Do NOT hardcode any API keys or secrets here.

-- ─────────────────────────────────────────────────────────────────────────────
-- services  (6 rows — matches dummyServices in features/services/dummyData.js)
-- ─────────────────────────────────────────────────────────────────────────────
insert into services
  (name, slug, short_description, description, thumbnail_url, whatsapp_template, is_active, sort_order)
values
  (
    'Tune Up Mesin',
    'tune-up-mesin',
    'Perawatan rutin mesin agar performa kendaraan tetap optimal.',
    'Tune up mesin adalah perawatan berkala yang memastikan semua komponen pengapian dan suplai bahan bakar bekerja dengan baik. Proses mencakup pemeriksaan busi, filter udara, filter bahan bakar, dan penyetelan timing mesin. Dikerjakan langsung di lokasi Anda tanpa perlu membawa kendaraan ke bengkel.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Tune+Up',
    'Halo Mobaryn, saya ingin memesan layanan Tune Up Mesin untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    1
  ),
  (
    'Ganti Oli & Filter',
    'ganti-oli-filter',
    'Penggantian oli mesin dan filter untuk menjaga kesehatan mesin.',
    'Penggantian oli mesin secara rutin adalah salah satu perawatan terpenting untuk menjaga performa dan umur mesin kendaraan. Kami menggunakan oli sesuai spesifikasi kendaraan Anda dan mengganti filter oli secara bersamaan. Proses dilakukan di lokasi Anda tanpa meninggalkan kendaraan.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Ganti+Oli',
    'Halo Mobaryn, saya ingin memesan layanan Ganti Oli & Filter untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    2
  ),
  (
    'Servis Rem',
    'servis-rem',
    'Pemeriksaan dan penggantian komponen rem untuk keamanan berkendara.',
    'Sistem rem yang berfungsi baik adalah prioritas keselamatan. Layanan servis rem kami mencakup pemeriksaan kampas rem, cakram, kaliper, dan minyak rem. Kondisi komponen akan diperiksa dan dijelaskan kepada Anda sebelum pengerjaan dimulai.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Servis+Rem',
    'Halo Mobaryn, saya ingin memesan layanan Servis Rem untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    3
  ),
  (
    'Pemeriksaan AC Mobil',
    'servis-ac',
    'Pengecekan dan perbaikan sistem pendingin kabin kendaraan.',
    'AC yang tidak dingin atau berbau bisa mengganggu kenyamanan berkendara. Layanan ini mencakup pemeriksaan tekanan freon, kondisi kompresor, kondensor, dan evaporator. Estimasi perbaikan disampaikan sebelum pengerjaan dilakukan.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Servis+AC',
    'Halo Mobaryn, saya ingin memesan layanan Pemeriksaan AC Mobil untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    4
  ),
  (
    'Ganti Aki',
    'ganti-aki',
    'Penggantian aki kendaraan yang tidak lagi menyimpan daya dengan baik.',
    'Aki yang lemah dapat menyebabkan kendaraan susah dihidupkan atau sistem kelistrikan tidak stabil. Kami memeriksa kondisi aki Anda terlebih dahulu dan memberikan rekomendasi penggantian jika diperlukan. Tersedia beberapa pilihan merek aki sesuai kebutuhan dan anggaran.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Ganti+Aki',
    'Halo Mobaryn, saya ingin memesan layanan Ganti Aki untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    5
  ),
  (
    'Pemeriksaan Kelistrikan',
    'servis-kelistrikan',
    'Diagnosa dan perbaikan sistem kelistrikan kendaraan.',
    'Masalah kelistrikan pada kendaraan bisa beragam — mulai dari lampu yang tidak menyala, sekring putus, hingga masalah sensor. Kami melakukan diagnosa menggunakan alat scan untuk membaca kode error sebelum menentukan langkah perbaikan.

[TODO: lengkapi deskripsi ini dengan informasi layanan yang akurat sebelum diluncurkan]',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Kelistrikan',
    'Halo Mobaryn, saya ingin memesan layanan Pemeriksaan Kelistrikan untuk kendaraan saya. Mohon informasi jadwal dan lokasi servis.',
    true,
    6
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- news  (3 rows — matches dummyNews in features/news/dummyData.js)
-- NOTE: content below is structural placeholder — NOT final editorial content.
-- author_id is NULL; update when admin user is provisioned.
-- ─────────────────────────────────────────────────────────────────────────────
insert into news
  (title, slug, excerpt, content, thumbnail_url, status, published_at, author_id)
values
  (
    '[Judul Artikel 1 — Placeholder]',
    'artikel-placeholder-1',
    'Ini adalah ringkasan artikel placeholder. Isi artikel belum tersedia — akan diisi dengan konten asli setelah tahap penulisan konten.',
    '<p>Ini adalah paragraf pertama dari artikel placeholder. Konten ini berfungsi sebagai contoh struktural untuk menampilkan layout halaman artikel — bukan teks final yang siap dipublikasikan.</p>

<p>Paragraf kedua menunjukkan bagaimana teks panjang ditampilkan di halaman ini. Lebar kolom, jarak antar paragraf, dan ukuran huruf dapat disesuaikan di sini sebelum konten asli dimasukkan.</p>

<p>Paragraf ketiga. Artikel asli akan berisi informasi berguna tentang perawatan kendaraan atau informasi layanan Mobaryn. Pastikan konten telah diverifikasi sebelum dipublikasikan.</p>

<p>[TODO: ganti seluruh konten ini dengan artikel asli sebelum diluncurkan]</p>',
    'https://placehold.co/640x400/e2e8f0/64748b?text=Artikel+1',
    'published',
    '2025-01-15T08:00:00Z',
    null
  ),
  (
    '[Judul Artikel 2 — Placeholder]',
    'artikel-placeholder-2',
    'Ini adalah ringkasan artikel placeholder. Isi artikel belum tersedia — akan diisi dengan konten asli setelah tahap penulisan konten.',
    '<p>Ini adalah paragraf pertama dari artikel placeholder. Konten ini berfungsi sebagai contoh struktural untuk menampilkan layout halaman artikel — bukan teks final yang siap dipublikasikan.</p>

<p>Paragraf kedua menunjukkan bagaimana teks panjang ditampilkan di halaman ini. Lebar kolom, jarak antar paragraf, dan ukuran huruf dapat disesuaikan di sini sebelum konten asli dimasukkan.</p>

<p>Paragraf ketiga. Artikel asli akan berisi informasi berguna tentang perawatan kendaraan atau informasi layanan Mobaryn. Pastikan konten telah diverifikasi sebelum dipublikasikan.</p>

<p>[TODO: ganti seluruh konten ini dengan artikel asli sebelum diluncurkan]</p>',
    'https://placehold.co/640x400/e2e8f0/64748b?text=Artikel+2',
    'published',
    '2025-01-10T08:00:00Z',
    null
  ),
  (
    '[Judul Artikel 3 — Placeholder]',
    'artikel-placeholder-3',
    'Ini adalah ringkasan artikel placeholder. Isi artikel belum tersedia — akan diisi dengan konten asli setelah tahap penulisan konten.',
    '<p>Ini adalah paragraf pertama dari artikel placeholder. Konten ini berfungsi sebagai contoh struktural untuk menampilkan layout halaman artikel — bukan teks final yang siap dipublikasikan.</p>

<p>Paragraf kedua menunjukkan bagaimana teks panjang ditampilkan di halaman ini. Lebar kolom, jarak antar paragraf, dan ukuran huruf dapat disesuaikan di sini sebelum konten asli dimasukkan.</p>

<p>Paragraf ketiga. Artikel asli akan berisi informasi berguna tentang perawatan kendaraan atau informasi layanan Mobaryn. Pastikan konten telah diverifikasi sebelum dipublikasikan.</p>

<p>[TODO: ganti seluruh konten ini dengan artikel asli sebelum diluncurkan]</p>',
    'https://placehold.co/640x400/e2e8f0/64748b?text=Artikel+3',
    'published',
    '2025-01-05T08:00:00Z',
    null
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- gallery  (8 rows — matches dummyGallery in features/gallery/dummyData.js)
-- ─────────────────────────────────────────────────────────────────────────────
insert into gallery (image_url, caption, sort_order)
values
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+1', '[Caption placeholder 1]', 1),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+2', '[Caption placeholder 2]', 2),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+3', '[Caption placeholder 3]', 3),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+4', '[Caption placeholder 4]', 4),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+5', '[Caption placeholder 5]', 5),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+6', '[Caption placeholder 6]', 6),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+7', '[Caption placeholder 7]', 7),
  ('https://placehold.co/600x400/e2e8f0/64748b?text=Galeri+8', '[Caption placeholder 8]', 8);

-- ─────────────────────────────────────────────────────────────────────────────
-- promos  (3 rows — matches dummyPromos in features/promos/dummyData.js)
-- service_id is NULL for all seed promos (no FK linkage yet)
-- ─────────────────────────────────────────────────────────────────────────────
insert into promos (title, description, thumbnail_url, service_id, start_date, end_date, is_active)
values
  (
    '[Promo Placeholder 1]',
    'Deskripsi promo placeholder — akan diisi dengan konten promo asli.',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Promo+1',
    null,
    '2025-02-01',
    '2025-02-28',
    true
  ),
  (
    '[Promo Placeholder 2]',
    'Deskripsi promo placeholder — akan diisi dengan konten promo asli.',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Promo+2',
    null,
    '2025-03-01',
    '2025-03-31',
    false
  ),
  (
    '[Promo Placeholder 3]',
    'Deskripsi promo placeholder — akan diisi dengan konten promo asli.',
    'https://placehold.co/480x320/e2e8f0/64748b?text=Promo+3',
    null,
    '2025-04-01',
    '2025-04-30',
    true
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- testimonials  (3 rows — matches dummyTestimonials in features/testimonials/dummyData.js)
-- is_published = false: placeholder testimonials are intentionally NOT shown publicly
-- until replaced with real customer reviews.
-- ─────────────────────────────────────────────────────────────────────────────
insert into testimonials (customer_name, content, rating, photo_url, is_published)
values
  (
    'Pelanggan A',
    '[Ini adalah testimoni placeholder. Isi akan diganti dengan ulasan pelanggan nyata setelah layanan berjalan.]',
    5,
    'https://placehold.co/80x80/e2e8f0/64748b?text=A',
    false  -- placeholder: set true only when replaced with a real review
  ),
  (
    'Pelanggan B',
    '[Ini adalah testimoni placeholder. Isi akan diganti dengan ulasan pelanggan nyata setelah layanan berjalan.]',
    5,
    'https://placehold.co/80x80/e2e8f0/64748b?text=B',
    false
  ),
  (
    'Pelanggan C',
    '[Ini adalah testimoni placeholder. Isi akan diganti dengan ulasan pelanggan nyata setelah layanan berjalan.]',
    5,
    'https://placehold.co/80x80/e2e8f0/64748b?text=C',
    false
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- settings  (update singleton row created in migration 0006)
-- Values match config/site.js placeholders — replace with real data before launch.
-- TODO: ganti whatsapp_number, instagram_handle, address, operating_hours dengan data asli.
-- ─────────────────────────────────────────────────────────────────────────────
update settings
set
  whatsapp_number  = '6281234567890',   -- TODO: ganti nomor asli
  instagram_handle = 'mobaryn',         -- TODO: ganti handle Instagram asli
  address          = 'Alamat belum diisi', -- TODO: ganti alamat asli
  operating_hours  = 'Jam operasional belum diisi', -- TODO: ganti jam operasional asli
  service_areas    = array[
    '[Area Layanan 1]', '[Area Layanan 2]', '[Area Layanan 3]',
    '[Area Layanan 4]', '[Area Layanan 5]', '[Area Layanan 6]',
    '[Area Layanan 7]', '[Area Layanan 8]', '[Area Layanan 9]',
    '[Area Layanan 10]', '[Area Layanan 11]', '[Area Layanan 12]'
  ],
  updated_at       = now()
where id = 1;
