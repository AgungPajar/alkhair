import Link from "next/link";

export const metadata = {
  title: "Jadwal Kegiatan | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Jadwal kegiatan belajar mengajar TPQ, Tahsin, dan Tahfizh Rumah Qur'ani Al-Khair Cerdiq.",
};

export default function Jadwal() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Jadwal Kegiatan</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Informasi lengkap mengenai jadwal rutin pembelajaran dan kegiatan di Rumah Qur'ani Al-Khair Cerdiq.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Sesi Pembelajaran */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Sesi Pembelajaran Harian (Senin - Jumat)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-orange-400">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">Sesi Ashar</h3>
                <span className="bg-orange-100 text-orange-600 text-sm font-bold px-3 py-1 rounded-full">15:30 - 17:00</span>
              </div>
              <p className="text-gray-600 mb-6">Sesi sore hari, cocok untuk anak-anak setelah pulang sekolah umum.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  <span className="text-gray-700">Pembukaan & Doa</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  <span className="text-gray-700">Klasikal Iqra/Al-Qur'an</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  <span className="text-gray-700">Setoran Hafalan (Ziyadah/Muroja'ah)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                  <span className="text-gray-700">Materi Diniyah Singkat</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-t-4 border-t-indigo-500">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">Sesi Maghrib</h3>
                <span className="bg-indigo-100 text-indigo-600 text-sm font-bold px-3 py-1 rounded-full">18:30 - 20:00</span>
              </div>
              <p className="text-gray-600 mb-6">Sesi malam hari setelah shalat Maghrib, fokus pada intensitas hafalan dan perbaikan bacaan.</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="text-gray-700">Shalat Maghrib Berjamaah (Bagi yang datang awal)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="text-gray-700">Talaqqi Al-Qur'an</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="text-gray-700">Tasmi' Hafalan</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="text-gray-700">Shalat Isya Berjamaah (Penutup)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabel Jadwal Mingguan */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Tabel Materi Mingguan
          </h2>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-red-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider">Hari</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider">Materi Utama</th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-primary uppercase tracking-wider">Materi Tambahan</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Senin</td>
                    <td className="px-6 py-4 text-gray-700">Tahsin / Iqra & Setoran Hafalan</td>
                    <td className="px-6 py-4 text-gray-700">Aqidah / Tauhid Anak</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Selasa</td>
                    <td className="px-6 py-4 text-gray-700">Tahsin / Iqra & Setoran Hafalan</td>
                    <td className="px-6 py-4 text-gray-700">Adab dan Akhlak Harian</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Rabu</td>
                    <td className="px-6 py-4 text-gray-700">Tahsin / Iqra & Setoran Hafalan</td>
                    <td className="px-6 py-4 text-gray-700">Hafalan Doa Sehari-hari</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Kamis</td>
                    <td className="px-6 py-4 text-gray-700">Tahsin / Iqra & Setoran Hafalan</td>
                    <td className="px-6 py-4 text-gray-700">Fiqih Ibadah Praktis (Wudhu, Shalat)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Jumat</td>
                    <td className="px-6 py-4 text-gray-700">Muroja'ah Kubro (Evaluasi Hafalan)</td>
                    <td className="px-6 py-4 text-gray-700">Sirah Nabawiyah (Kisah Nabi)</td>
                  </tr>
                  <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-primary">Sabtu</td>
                    <td className="px-6 py-4 text-foreground font-medium" colSpan="2">Ekstrakurikuler / Kegiatan Khusus (Menyesuaikan jadwal bulanan)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 italic">* Jadwal di atas dapat menyesuaikan dengan kondisi dan tingkat pencapaian masing-masing kelompok santri.</p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ingin bergabung bersama kami?</h2>
            <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
              Pendaftaran santri baru selalu terbuka. Pilih sesi yang paling sesuai dengan aktivitas ananda.
            </p>
            <Link href="/pendaftaran" className="inline-flex items-center px-8 py-4 rounded-full text-primary font-bold bg-white hover:bg-gray-100 transition-colors shadow-md">
              Mulai Pendaftaran
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
