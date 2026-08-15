import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-primary text-sm font-semibold mb-4 border border-red-200">
                Pendaftaran Santri Baru Dibuka!
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Membangun <span className="text-primary relative inline-block">Generasi Qur’ani<span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 -z-10 rounded-sm opacity-60"></span></span> Sejak Dini
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                Santri belajar membaca Al-Qur’an secara bertahap dengan pendampingan guru yang insyaAllah amanah dan berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link
                  href="/pendaftaran"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-[0_4px_14px_0_rgba(214,40,40,0.39)] hover:shadow-[0_6px_20px_rgba(214,40,40,0.23)] hover:-translate-y-1"
                >
                  Daftar Santri Baru
                </Link>
                <Link
                  href="/program"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-bold text-foreground bg-white border-2 border-gray-200 hover:border-primary hover:text-primary transition-all duration-300 shadow-sm"
                >
                  Lihat Program
                </Link>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                <img
                  src="/assets/ppdb.jpeg"
                  alt="Anak-anak belajar mengaji"
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-[350px] md:h-[450px] border-4 border-white"
                />
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 animate-bounce" style={{animationDuration: '3s'}}>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Metode Belajar</p>
                    <p className="font-bold text-foreground">Interaktif & Menyenangkan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-primary mb-2">150+</h3>
              <p className="text-gray-600 font-medium">Santri Aktif</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-primary mb-2">12</h3>
              <p className="text-gray-600 font-medium">Pengajar Profesional</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-primary mb-2">5</h3>
              <p className="text-gray-600 font-medium">Program Unggulan</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-extrabold text-primary mb-2">3</h3>
              <p className="text-gray-600 font-medium">Tahun Mengabdi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Unggulan Kami</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              Kami merancang kurikulum yang komprehensif untuk mendampingi anak Anda menjadi generasi Qur’ani yang berakhlak mulia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="/assets/foto.jpeg" alt="TPQ Al-Khair" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-primary mb-6 -mt-14 relative z-10 border-4 border-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Tahsin Al-Qur'an</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  Program perbaikan bacaan Al-Qur'an sesuai dengan kaidah tajwid yang benar. Menggunakan metode praktis dan menyenangkan untuk anak-anak.
                </p>
                <Link href="/program" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="/assets/foto8.jpeg" alt="Tahfizh" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-primary mb-6 -mt-14 relative z-10 border-4 border-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Tahfizh Al-Qur'an</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  Menghafal Al-Qur'an dengan target capaian yang disesuaikan kemampuan anak, dilengkapi muroja'ah rutin untuk menjaga hafalan.
                </p>
                <Link href="/program" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img src="/assets/foto2.jpeg" alt="Diniyah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-primary mb-6 -mt-14 relative z-10 border-4 border-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">Kelas Diniyah</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  Pendidikan agama Islam dasar meliputi aqidah, fiqih ibadah praktis, adab, doa harian, dan sejarah Nabi (Sirah).
                </p>
                <Link href="/program" className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors">
                  Pelajari Lebih Lanjut
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/program" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Lihat Semua Program
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Apa Kata Orang Tua?</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-8 rounded-2xl relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-red-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "Alhamdulillah, sejak bergabung di Al-Khair Cerdiq, bacaan Al-Qur'an anak saya jauh lebih baik dan ia semakin rajin shalat tanpa disuruh."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bunda Aisyah" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Bunda Aisyah</h4>
                  <p className="text-sm text-gray-500">Orang tua dari santri kelas Tahsin</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-2xl relative">
              <svg className="absolute top-6 right-6 w-10 h-10 text-red-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "Pengajarnya sangat ramah dan penyabar. Anak saya selalu semangat kalau waktunya mengaji di sore hari."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Ayah Budi" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ayah Budi</h4>
                  <p className="text-sm text-gray-500">Orang tua dari santri TPQ</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-50 p-8 rounded-2xl relative hidden lg:block">
              <svg className="absolute top-6 right-6 w-10 h-10 text-red-200" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-gray-700 italic mb-6 relative z-10">
                "Hafalan anak saya perkembangannya sangat bagus. Suasana pondok yang nyaman sangat mendukung anak-anak untuk fokus menghafal."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Bunda Siti" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Bunda Siti</h4>
                  <p className="text-sm text-gray-500">Orang tua dari santri Tahfizh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Daftarkan putra-putri Anda ke Rumah Qur'ani Al-Khair Cerdiq dan jadikan mereka generasi Qur'ani yang cemerlang di masa depan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pendaftaran" className="px-8 py-4 rounded-full text-primary font-bold bg-white hover:bg-gray-100 transition-colors shadow-lg">
              Daftar Sekarang
            </Link>
            <a href="https://wa.me/6282393363313" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-white font-bold bg-primary-dark hover:bg-red-900 border border-red-400 transition-colors">
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
