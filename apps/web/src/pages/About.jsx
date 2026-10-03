import Container from "../components/layout/Container"
import WhatsAppButton from "../components/whatsapp/WhatsAppButton"

// TODO: Ganti semua teks placeholder di bawah dengan copy final brand sebelum diluncurkan.
// Jangan jadikan ini sebagai konten resmi tanpa review.

export default function About() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-16" style={{ maxWidth: "var(--text-max)" }}>

          {/* ── Brand story ── */}
          <section className="flex flex-col gap-6">
            <h1
              className="font-semibold text-navy leading-tight"
              style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
            >
              Tentang Mobaryn
            </h1>

            {/* TODO: ganti paragraf ini dengan cerita brand asli */}
            <div className="flex flex-col gap-4 text-base text-navy/80 leading-relaxed">
              <p>
                [Placeholder — cerita singkat tentang Mobaryn belum ditulis. Paragraf ini akan
                diganti dengan narasi asli yang menjelaskan latar belakang dan misi layanan.]
              </p>
              <p>
                [Placeholder — paragraf kedua yang menjelaskan nilai utama Mobaryn: misalnya
                alasan di balik model layanan panggilan, komitmen terhadap transparansi, dan
                bagaimana pengalaman pelanggan menjadi prioritas.]
              </p>
              <p>
                [Placeholder — paragraf penutup. Bisa berisi visi ke depan atau pernyataan
                singkat tentang arah layanan Mobaryn.]
              </p>
            </div>
          </section>

          {/* ── How Mobaryn works — narrative version ── */}
          <section className="flex flex-col gap-6">
            <h2 className="text-[22px] sm:text-[26px] font-semibold text-navy leading-tight">
              Bagaimana Mobaryn Bekerja
            </h2>
            <div className="flex flex-col gap-4 text-base text-navy/80 leading-relaxed">
              <p>
                Proses dimulai dari halaman layanan: Anda memilih jenis servis yang dibutuhkan,
                lalu menekan tombol WhatsApp. Pesan sudah terisi otomatis — tinggal kirim.
              </p>
              <p>
                Tim admin kami akan merespons untuk mengkonfirmasi jadwal dan lokasi Anda. Setelah
                jadwal disepakati, mekanik dikirim ke lokasi yang Anda tentukan.
              </p>
              <p>
                Sebelum pengerjaan dimulai, kondisi kendaraan dan estimasi biaya dijelaskan terlebih
                dahulu. Anda yang memutuskan apakah pengerjaan dilanjutkan. Seluruh proses dapat
                Anda pantau langsung karena dikerjakan di hadapan Anda.
              </p>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="flex flex-col gap-4 p-6 rounded-[8px] border border-navy/8 bg-surface">
            <p className="text-base font-medium text-navy">Ada pertanyaan tentang layanan kami?</p>
            <WhatsAppButton />
          </section>

        </div>
      </Container>
    </div>
  )
}
