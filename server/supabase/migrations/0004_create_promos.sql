-- Migration: 0004_create_promos.sql
-- Creates the promos/promotions table.
-- service_id is nullable — a promo can be site-wide or tied to a specific service.

create table promos (
  id             uuid        primary key default gen_random_uuid(),
  title          text        not null,
  description    text,
  thumbnail_url  text,
  service_id     uuid        references services(id) on delete set null,
  start_date     date,
  end_date       date,
  is_active      boolean     not null default true,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create index on promos (is_active);
create index on promos (service_id);

comment on table promos is 'Promo dan penawaran khusus Mobaryn.';
comment on column promos.service_id is 'Nullable — null berarti promo berlaku untuk semua layanan.';
