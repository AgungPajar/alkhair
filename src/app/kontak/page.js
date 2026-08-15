import Link from "next/link";

export const metadata = {
  title: "Kontak Kami | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Hubungi Rumah Qur'ani Al-Khair Cerdiq. Alamat, nomor WhatsApp, email, dan lokasi di Gowa, Sulawesi Selatan.",
};

export default function Kontak() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary py-16 border-b border-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Hubungi Kami</h1>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Kami siap melayani pertanyaan Anda seputar program, pendaftaran, maupun kerjasama.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Info Kontak */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Informasi Kontak</h2>
            
            <div className="space-y-8">
              {/* Alamat */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Alamat Lengkap</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Jl. Bontotangnga kompleks IDI Pao-pao<br />
                    Kec. Somba Opu, Kab. Gowa<br />
                    Sulawesi Selatan
                  </p>
                </div>
              </div>

              {/* Telepon / WA */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Telepon & WhatsApp</h3>
                  <p className="text-gray-600 mb-2">0823 9336 3313 (Admin)</p>
                  <a href="https://wa.me/6282393363313" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold hover:text-primary-dark">
                    Chat via WhatsApp
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>

              {/* Email & Sosial Media */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Digital</h3>
                  <p className="text-gray-600 mb-1">Email: pondoktahfizhcerdiq@gmail.com</p>
                  <p className="text-gray-600">Instagram: <a href="https://ig.me/alkhaircerdiq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@alkhaircerdiq</a></p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Jam Operasional</h3>
                  <p className="text-gray-600">Layanan Online: 24 Jam</p>
                  <p className="text-gray-600">Kegiatan TPQ: Sesuai Jadwal (Sore & Malam)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maps */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Lokasi Kami</h2>
            <div className="bg-white p-2 rounded-3xl shadow-md border border-gray-100 h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127138.83401569308!2d119.37804471958254!3d-5.201733973659424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee2b963e635f7%3A0x6a10051cdcb05b93!2sSomba%20Opu%2C%20Gowa%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1714578129381!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1.25rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Lokasi Al-Khair Cerdiq"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
