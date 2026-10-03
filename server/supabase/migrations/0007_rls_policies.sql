-- Migration: 0007_rls_policies.sql
-- Row Level Security for all six tables.
--
-- Design rationale:
--   • No Express/custom server — the anon key is exposed to the browser,
--     so RLS is the ONLY enforcement layer between the public internet and the data.
--   • Public (anon) role: read-only, filtered to "visible" rows only.
--   • Authenticated role (Supabase admin user): full CRUD.
--   • Never grant INSERT/UPDATE/DELETE to the anon role.

-- ─────────────────────────────────────────────────────────────────────────────
-- Enable RLS on every table
-- ─────────────────────────────────────────────────────────────────────────────
alter table services     enable row level security;
alter table news         enable row level security;
alter table gallery      enable row level security;
alter table promos       enable row level security;
alter table testimonials enable row level security;
alter table settings     enable row level security;

-- ─────────────────────────────────────────────────────────────────────────────
-- services
-- ─────────────────────────────────────────────────────────────────────────────
-- Publik hanya bisa melihat layanan yang aktif.
create policy "services_public_read" on services
  for select
  using (is_active = true);

-- Admin bisa melakukan semua operasi (select, insert, update, delete).
create policy "services_admin_all" on services
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────────────────
-- news
-- ─────────────────────────────────────────────────────────────────────────────
-- Publik hanya bisa membaca artikel yang sudah dipublikasikan.
create policy "news_public_read" on news
  for select
  using (status = 'published');

create policy "news_admin_all" on news
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────────────────
-- gallery
-- ─────────────────────────────────────────────────────────────────────────────
-- Semua foto galeri terlihat publik (tidak ada filter is_active/published).
create policy "gallery_public_read" on gallery
  for select
  using (true);

create policy "gallery_admin_all" on gallery
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────────────────
-- promos
-- ─────────────────────────────────────────────────────────────────────────────
-- Publik hanya melihat promo aktif.
create policy "promos_public_read" on promos
  for select
  using (is_active = true);

create policy "promos_admin_all" on promos
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────────────────
-- testimonials
-- ─────────────────────────────────────────────────────────────────────────────
-- Publik hanya melihat testimoni yang sudah di-publish.
create policy "testimonials_public_read" on testimonials
  for select
  using (is_published = true);

create policy "testimonials_admin_all" on testimonials
  for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- ─────────────────────────────────────────────────────────────────────────────
-- settings (singleton row)
-- ─────────────────────────────────────────────────────────────────────────────
-- Publik boleh membaca settings (nomor WA, jam, area layanan, dst).
create policy "settings_public_read" on settings
  for select
  using (true);

-- Admin hanya boleh UPDATE — tidak boleh INSERT atau DELETE baris lain
-- (singleton pattern; baris selalu id=1, dibuat di migration 0006).
create policy "settings_admin_update" on settings
  for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');
