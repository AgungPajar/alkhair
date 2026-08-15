export const metadata = {
  title: "Galeri | Rumah Qur’ani Al-Khair Cerdiq",
  description: "Dokumentasi kegiatan belajar mengajar, tasmi', kajian, dan kegiatan santri Rumah Qur'ani Al-Khair Cerdiq.",
};

export default function Galeri() {
  const galleries = [
    {
      category: "Kegiatan Belajar",
      images: [
        { src: "/assets/foto3.jpeg", alt: "Santri belajar membaca Iqra" },
        { src: "/assets/foto4.jpeg", alt: "Suasana kelas tahsin" },
        { src: "/assets/foto5.jpeg", alt: "Hafalan bersama ustadz" },
      ]
    },
    {
      category: "Tasmi' & Munaqasyah",
      images: [
        { src: "/assets/foto8.jpeg", alt: "Ujian tahfizh santri" },
        { src: "/assets/foto9.jpeg", alt: "Acara kelulusan tahfizh" },
        { src: "/assets/foto1.jpeg", alt: "Tasmi' hafalan 1 juz" },
      ]
    },
    {
      category: "Kegiatan Ekstra & Outbond",
      images: [
        { src: "/assets/foto2.jpeg", alt: "Outbond santri" },
        { src: "/assets/foto3.jpeg", alt: "Kajian keluarga santri" },
        { src: "/assets/foto4.jpeg", alt: "Bermain bersama" },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-50 to-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Galeri Kegiatan</h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Potret keceriaan dan semangat santri Rumah Qur'ani Al-Khair Cerdiq dalam menuntut ilmu.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {galleries.map((section, idx) => (
          <div key={idx} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold text-foreground mb-8 border-l-4 border-primary pl-4">
              {section.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image, i) => (
                <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-video md:aspect-square bg-gray-100 cursor-pointer">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-medium p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
