-- Migration: 0008_storage_setup.sql
-- Creates the "media" storage bucket for uploaded images (thumbnails, gallery, etc.)
-- and sets RLS policies so the bucket is publicly readable but only writable
-- by authenticated (admin) users.
--
-- NOTE: storage.objects RLS must be enabled by default in Supabase.
-- If running locally via the CLI, ensure the storage service is running.

-- Create the bucket (idempotent)
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

-- ── Storage RLS policies ───────────────────────────────────────────────────

-- Anyone can read objects from the media bucket (images rendered in the public site)
create policy "media_public_read" on storage.objects
  for select
  using (bucket_id = 'media');

-- Only authenticated admins can upload new images
create policy "media_admin_insert" on storage.objects
  for insert
  with check (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );

-- Only authenticated admins can replace/update existing objects
create policy "media_admin_update" on storage.objects
  for update
  using (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );

-- Only authenticated admins can delete objects
create policy "media_admin_delete" on storage.objects
  for delete
  using (
    bucket_id = 'media'
    and auth.role() = 'authenticated'
  );
