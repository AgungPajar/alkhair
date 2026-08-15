import Link from "next/link";

export const metadata = {
  title: "Artikel & Berita | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Artikel seputar pendidikan anak islami, tahfizh, tajwid, adab anak, dan kegiatan lembaga Rumah Qur'ani Al-Khair Cerdiq.",
};

export default function Artikel() {
  const articles = [
    {
      id: 1,
      title: "Keutamaan Mengajarkan Al-Qur'an pada Anak Sejak Dini",
      category: "Pendidikan Anak Islami",
      date: "12 Agustus 2026",
      image: "https://images.unsplash.com/photo-1609599006353-e629aaab31ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Mengenalkan Al-Qur'an sejak usia dini adalah investasi terbaik bagi masa depan anak. Simak beberapa keutamaan yang dijelaskan dalam hadits...",
    },
    {
      id: 2,
      title: "Metode Menghafal Al-Qur'an yang Menyenangkan untuk Anak",
      category: "Tahfizh",
      date: "05 Agustus 2026",
      image: "https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Menghafal Al-Qur'an tidak harus kaku dan membosankan. Berikut adalah beberapa metode interaktif yang kami terapkan di Al-Khair Cerdiq...",
    },
    {
      id: 3,
      title: "Pentingnya Memahami Makharijul Huruf",
      category: "Tajwid",
      date: "28 Juli 2026",
      image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Membaca Al-Qur'an dengan benar sangat bergantung pada ketepatan mengeluarkan huruf dari makhrajnya. Pelajari dasar-dasarnya di sini...",
    },
    {
      id: 4,
      title: "Adab Menuntut Ilmu bagi Santri TPQ",
      category: "Adab Anak",
      date: "20 Juli 2026",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Ilmu tidak akan masuk kecuali dengan adab yang baik. Menanamkan adab sebelum menuntut ilmu adalah kunci keberkahan belajar...",
    },
    {
      id: 5,
      title: "Liputan Kegiatan Outbond Santri Al-Khair Cerdiq 2026",
      category: "Kegiatan Lembaga",
      date: "15 Juli 2026",
      image: "https://images.unsplash.com/photo-1473621038520-256191b72b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Alhamdulillah, kegiatan outbond semester ini berjalan lancar. Santri diajak untuk mentadabburi alam sambil bermain games edukatif islami...",
    },
    {
      id: 6,
      title: "Tips Mengatasi Anak Malas Mengaji",
      category: "Pendidikan Anak Islami",
      date: "01 Juli 2026",
      image: "https://images.unsplash.com/photo-1590402120012-9c17d7b3ebec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      excerpt: "Orang tua sering mengeluhkan anaknya yang malas berangkat ke TPQ. Simak 5 tips jitu berikut ini untuk membangkitkan semangat anak...",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow flex items-center justify-center flex-col text-center px-4 py-32">
        <div className="w-24 h-24 bg-red-100 text-primary rounded-full flex items-center justify-center mb-8 shadow-sm">
          <svg className="w-12 h-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Nantikan Segera!</h1>
        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg max-w-xl mb-10 leading-relaxed">
          Halaman Artikel & Berita sedang dalam tahap persiapan. Kami akan segera hadir menyajikan tulisan edukatif islami yang bermanfaat untuk Anda dan keluarga.
        </p>
        <Link href="/" className="px-8 py-4 rounded-full text-base font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:-translate-y-1">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );

  /* TODO: Buka komentar ini saat artikel sudah siap ditampilkan
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header * /}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Artikel & Berita</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Kumpulan tulisan inspiratif seputar pendidikan anak, tahfizh, dan info terbaru dari kami.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {article.date}
                </p>
                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`#`} className="focus:outline-none">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                  {article.excerpt}
                </p>
                <Link href={`#`} className="inline-flex items-center text-primary font-bold hover:text-primary-dark transition-colors mt-auto">
                  Baca Selengkapnya
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dummy * /}
        <div className="flex justify-center mt-16">
          <nav className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-50 disabled:opacity-50" disabled>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-md">1</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">2</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">3</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-gray-500 hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
  */
}
