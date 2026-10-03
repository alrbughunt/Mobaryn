-- Migration: 0006_create_settings.sql
-- Creates a singleton settings table.
-- Design: id is always 1, enforced by CHECK constraint, so there can only ever
-- be one row. Use INSERT ... ON CONFLICT DO NOTHING to initialise the row.
-- Admins UPDATE this row; they never INSERT or DELETE it.

create table settings (
  id               integer     primary key default 1 check (id = 1),
  whatsapp_number  text,
  instagram_handle text,
  address          text,
  operating_hours  text,
  service_areas    text[],                  -- ordered array of area names
  updated_at       timestamptz not null default now()
);

-- Seed the singleton row so it always exists
insert into settings (id)
values (1)
on conflict (id) do nothing;

comment on table settings is 'Konfigurasi situs Mobaryn — singleton row (id selalu 1).';
comment on column settings.service_areas is 'Array terurut nama area layanan; dikelola admin lewat SettingsAdmin.';
