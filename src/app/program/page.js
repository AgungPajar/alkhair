import Link from "next/link";

export const metadata = {
  title: "Program Kami | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Program pendidikan Rumah Qur'ani Al-Khair Cerdiq: TPQ, Tahsin, Tahfizh, Kelas Diniyah, dan Bahasa Arab.",
};

export default function Program() {
  const programs = [
    {
      id: "tpq",
      title: "TPQ Al-Khair Cerdiq",
      description: "Program dasar belajar membaca Al-Qur'an mulai dari pengenalan huruf hijaiyah hingga lancar membaca Al-Qur'an sesuai tajwid.",
      age: "5 - 12 Tahun",
      schedule: "Senin - Jumat (Sore)",
      method: "Iqra / Tilawati interaktif",
      image: "/assets/program.jpeg",
      color: "bg-blue-50 text-blue-600",
    },
    {
      id: "tahsin",
      title: "Tahsin Al-Qur'an",
      description: "Fokus pada perbaikan makhorijul huruf dan sifatul huruf, serta penerapan kaidah tajwid yang benar dalam tilawah.",
      age: "7 - 15 Tahun",
      schedule: "Senin, Rabu, Jumat",
      method: "Talaqqi dan Musyafahah",
      image: "/assets/foto1.jpeg",
      color: "bg-green-50 text-green-600",
    },
    {
      id: "tahfizh",
      title: "Tahfizh Al-Qur'an",
      description: "Program menghafal Al-Qur'an dengan target hafalan juz 30 (Juz 'Amma) dan juz-juz lainnya, dilengkapi mutaba'ah rutin.",
      age: "7 - 15 Tahun",
      schedule: "Senin - Jumat",
      method: "Ziyadah, Muroja'ah, Tasmi'",
      image: "/assets/foto2.jpeg",
      color: "bg-purple-50 text-purple-600",
    },
    {
      id: "diniyah",
      title: "Kelas Diniyah",
      description: "Pendidikan agama komprehensif meliputi Aqidah, Akhlak, Fiqih Ibadah praktis (Wudhu, Shalat), dan Sirah Nabawiyah.",
      age: "6 - 12 Tahun",
      schedule: "Setiap Sabtu",
      method: "Ceramah, Praktik, Bercerita",
      image: "/assets/foto3.jpeg",
      color: "bg-orange-50 text-orange-600",
    },
    {
      id: "bahasa-arab",
      title: "Bahasa Arab Dasar",
      description: "Pengenalan kosa kata bahasa Arab dasar (Mufradat) sehari-hari untuk anak-anak dengan metode yang menyenangkan.",
      age: "7 - 12 Tahun",
      schedule: "Menyesuaikan",
      method: "Bermain sambil belajar",
      image: "/assets/foto4.jpeg",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      id: "liburan",
      title: "Dauroh Liburan",
      description: "Program khusus intensif mengisi waktu libur sekolah dengan kegiatan islami, tahfizh camp, dan outbond edukatif.",
      age: "7 - 15 Tahun",
      schedule: "Masa Libur Sekolah",
      method: "Camp Intensif & Outbond",
      image: "/assets/foto5.jpeg",
      color: "bg-teal-50 text-teal-600",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary py-16 border-b border-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Program Kami</h1>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Pilihan program pendidikan Al-Qur'an yang disesuaikan dengan usia dan kemampuan ananda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <div key={program.id} id={program.id} className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 lg:w-2/5">
                <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 shadow-md">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                  <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${program.color}`}>
                    {program.age}
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 lg:w-3/5 md:px-6">
                <h2 className="text-3xl font-bold text-foreground mb-4">{program.title}</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium mb-1">Jadwal Belajar</p>
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {program.schedule}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium mb-1">Metode Pembelajaran</p>
                    <p className="font-bold text-foreground flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                      {program.method}
                    </p>
                  </div>
                </div>
                
                <Link href={`/pendaftaran?program=${program.id}`} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-base font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:-translate-y-1 w-full sm:w-auto">
                  Daftar Program Ini
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
