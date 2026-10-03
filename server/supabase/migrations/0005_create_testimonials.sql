-- Migration: 0005_create_testimonials.sql
-- Creates the testimonials table.

create table testimonials (
  id              uuid        primary key default gen_random_uuid(),
  customer_name   text        not null,
  content         text        not null,
  rating          integer     check (rating between 1 and 5),
  photo_url       text,
  is_published    boolean     not null default true,
  created_at      timestamptz not null default now()
);

create index on testimonials (is_published);

comment on table testimonials is 'Testimoni pelanggan Mobaryn.';
comment on column testimonials.is_published is 'Hanya testimoni dengan is_published=true yang terlihat di halaman publik (dikontrol RLS).';
