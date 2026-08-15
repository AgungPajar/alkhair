import Image from "next/image";

export const metadata = {
  title: "Tentang Kami | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Sejarah, visi, misi, dan profil pengajar Rumah Qur'ani Al-Khair Cerdiq",
};

export default function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Tentang Kami</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat lembaga pendidikan Al-Qur'an yang berdedikasi mencetak generasi rabbani.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sejarah & Profil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Sejarah Singkat</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-4">
                Rumah Qur’ani Al-Khair Cerdiq didirikan dengan niat luhur untuk memfasilitasi anak-anak dan generasi muda dalam mempelajari, membaca, dan menghafalkan Al-Qur'an. Berawal dari kepedulian terhadap pentingnya pendidikan agama sejak usia dini di era modern ini.
              </p>
              <p>
                Dengan metode pengajaran yang interaktif dan ramah anak, kami terus berkembang dan mendapat kepercayaan dari banyak orang tua di wilayah Gowa dan sekitarnya untuk menjadi mitra dalam mendidik putra-putri mereka menjadi generasi Qur'ani yang berakhlak mulia.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src="/assets/foto8.jpeg" 
              alt="Gedung Rumah Qur'ani" 
              className="relative rounded-3xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Visi Misi */}
        <div className="bg-red-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Visi</h2>
              </div>
              <p className="text-xl text-gray-700 italic font-medium leading-relaxed">
                "Menjadi lembaga pendidikan Al-Qur'an unggulan yang mencetak generasi Qur'ani, cerdas, mandiri, dan berakhlak mulia."
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h2 className="text-3xl font-bold text-foreground">Misi</h2>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Menyelenggarakan pendidikan tahsin dan tahfizh Al-Qur'an secara terpadu dan berkesinambungan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Menanamkan nilai-nilai aqidah, akhlak, dan adab islami dalam kehidupan sehari-hari.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Menggunakan metode pembelajaran yang inovatif, menyenangkan, dan ramah anak.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span>Menyiapkan pendidik (ustadz/ustadzah) yang berkompeten, amanah, dan berdedikasi tinggi.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nilai-nilai */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Nilai-Nilai Kami</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-lg font-bold text-foreground">Islami</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-foreground">Ramah Anak</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-foreground">Edukatif</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-foreground">Profesional</h3>
            </div>
          </div>
        </div>

        {/* Profil Pengajar */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Profil Pengajar</h2>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="assets/foto4.jpeg" 
                    alt={`Ustadz/Ustadzah ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">Ustadz/ah Name {i}</h3>
                  <p className="text-primary text-sm font-medium mb-3">Pengajar Tahfizh</p>
                  <p className="text-gray-500 text-sm line-clamp-2">Memiliki sanad qira'ah dan berpengalaman mengajar anak usia dini.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
