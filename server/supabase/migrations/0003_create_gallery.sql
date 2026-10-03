-- Migration: 0003_create_gallery.sql
-- Creates the gallery table for documentation photos.

create table gallery (
  id           uuid        primary key default gen_random_uuid(),
  image_url    text        not null,
  caption      text,
  sort_order   integer     not null default 0,
  created_at   timestamptz not null default now()
);

create index on gallery (sort_order);

comment on table gallery is 'Galeri foto dokumentasi pekerjaan Mobaryn.';
