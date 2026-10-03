-- Migration: 0001_create_services.sql
-- Creates the services table for bengkel panggilan service listings.

create extension if not exists pgcrypto;

create table services (
  id               uuid        primary key default gen_random_uuid(),
  name             text        not null,
  slug             text        not null unique,
  short_description text,
  description      text,                    -- long-form description (maps to long_description in frontend)
  price_label      text,                    -- optional human-readable price hint, e.g. "Mulai Rp 150.000"
  thumbnail_url    text,
  whatsapp_template text,                   -- per-service pre-filled WhatsApp message
  is_active        boolean     not null default true,
  sort_order       integer     not null default 0,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index on services (slug);
create index on services (sort_order);

comment on table services is 'Daftar layanan bengkel panggilan Mobaryn.';
comment on column services.description is 'Deskripsi panjang layanan — dirender di halaman detail layanan.';
comment on column services.whatsapp_template is 'Pesan WhatsApp pre-fill per layanan; jika null, fallback ke pesan default di settings.';
