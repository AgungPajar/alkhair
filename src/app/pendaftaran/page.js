"use client";

import { useState } from "react";
import Image from "next/image";

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    namaAnak: "",
    usia: "",
    namaOrangTua: "",
    nomorWa: "",
    alamat: "",
    program: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const message = `Assalamu'alaikum Admin Rumah Qur'ani Al-Khair Cerdiq, saya ingin mendaftarkan anak saya dengan data sebagai berikut:

*Nama Anak:* ${formData.namaAnak}
*Usia:* ${formData.usia} Tahun
*Nama Orang Tua:* ${formData.namaOrangTua}
*Nomor WhatsApp:* ${formData.nomorWa}
*Alamat:* ${formData.alamat}
*Program Pilihan:* ${formData.program}

Mohon informasi selanjutnya terkait prosedur pendaftaran dan biaya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6282393363313?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-primary py-16 border-b border-red-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pendaftaran Santri Baru</h1>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full mb-6 opacity-80"></div>
          <p className="text-red-100 max-w-2xl mx-auto text-lg">
            Lengkapi formulir di bawah ini untuk mendaftarkan putra-putri Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-orange-400"></div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Formulir Pendaftaran</h2>
                <p className="text-gray-500">Data Anda akan diteruskan ke WhatsApp Admin</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="namaAnak" className="block text-sm font-bold text-gray-700">Nama Lengkap Anak <span className="text-primary">*</span></label>
                  <input 
                    type="text" 
                    id="namaAnak" 
                    name="namaAnak" 
                    required 
                    value={formData.namaAnak}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white"
                    placeholder="Contoh: Muhammad Fatih"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="usia" className="block text-sm font-bold text-gray-700">Usia Anak (Tahun) <span className="text-primary">*</span></label>
                  <input 
                    type="number" 
                    id="usia" 
                    name="usia" 
                    required 
                    min="4"
                    max="18"
                    value={formData.usia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white"
                    placeholder="Contoh: 7"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="namaOrangTua" className="block text-sm font-bold text-gray-700">Nama Orang Tua/Wali <span className="text-primary">*</span></label>
                  <input 
                    type="text" 
                    id="namaOrangTua" 
                    name="namaOrangTua" 
                    required 
                    value={formData.namaOrangTua}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="nomorWa" className="block text-sm font-bold text-gray-700">Nomor WhatsApp <span className="text-primary">*</span></label>
                  <input 
                    type="tel" 
                    id="nomorWa" 
                    name="nomorWa" 
                    required 
                    value={formData.nomorWa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white"
                    placeholder="Contoh: 081234567890"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="alamat" className="block text-sm font-bold text-gray-700">Alamat Lengkap <span className="text-primary">*</span></label>
                <textarea 
                  id="alamat" 
                  name="alamat" 
                  required 
                  rows="3"
                  value={formData.alamat}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white resize-none"
                  placeholder="Masukkan alamat domisili saat ini"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label htmlFor="program" className="block text-sm font-bold text-gray-700">Pilih Program <span className="text-primary">*</span></label>
                <div className="relative">
                  <select 
                    id="program" 
                    name="program" 
                    required 
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none bg-gray-50 focus:bg-white appearance-none"
                  >
                    <option value="" disabled>-- Pilih Program Pendidikan --</option>
                    <option value="TPQ Al-Khair Cerdiq">TPQ Al-Khair Cerdiq (5-12 Thn)</option>
                    <option value="Tahsin Al-Qur'an">Tahsin Al-Qur'an (7-15 Thn)</option>
                    <option value="Tahfizh Al-Qur'an">Tahfizh Al-Qur'an (7-15 Thn)</option>
                    <option value="Kelas Diniyah">Kelas Diniyah (6-12 Thn)</option>
                    <option value="Bahasa Arab Dasar">Bahasa Arab Dasar (7-12 Thn)</option>
                    <option value="Belum Menentukan / Konsultasi Dulu">Belum Menentukan / Konsultasi Dulu</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.002.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.598 1.216.774 1.388.86.173.086.275.072.376-.043.101-.115.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                  </svg>
                  Kirim Data ke WhatsApp Admin
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Dengan mengklik tombol di atas, Anda akan dialihkan ke aplikasi WhatsApp.
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
