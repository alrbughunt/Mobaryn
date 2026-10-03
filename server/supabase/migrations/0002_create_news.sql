-- Migration: 0002_create_news.sql
-- Creates the news/articles table.
--
-- PERINGATAN KEAMANAN — HTML SANITISATION:
-- Kolom `content` berisi HTML bebas yang diinput admin lewat CMS.
-- Ketika konten ini dirender di frontend via dangerouslySetInnerHTML,
-- WAJIB disanitasi menggunakan library seperti DOMPurify SEBELUM rendering,
-- untuk mencegah XSS. Sanitasi dilakukan di sisi aplikasi, bukan di database.
-- Lihat: https://github.com/cure53/DOMPurify

create table news (
  id               uuid        primary key default gen_random_uuid(),
  title            text        not null,
  slug             text        not null unique,
  excerpt          text,
  content          text,                    -- HTML/rich content dari admin (WAJIB sanitasi di frontend)
  thumbnail_url    text,
  meta_description text,
  status           text        not null default 'draft'
                               check (status in ('draft', 'published')),
  published_at     timestamptz,
  author_id        uuid        references auth.users(id) on delete set null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index on news (slug);
create index on news (status);
create index on news (published_at desc);

comment on table news is 'Artikel dan berita Mobaryn.';
comment on column news.content is 'HTML bebas dari CMS admin. WAJIB disanitasi (DOMPurify) sebelum dirender di frontend.';
comment on column news.status is 'Status publikasi: draft (tidak terlihat publik) atau published (terlihat publik).';
