import React from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const fiturAyahandakos = [
  {
    title: "Fitur Pencarian",
    description:
      "Di kolom pencarian, kamu bisa cari kos di sekitarmu atau kos di seluruh daerah di Indonesia dengan memasukkan keyword, seperti kos dekat Kampus/Universitas di masing-masing kota, cari kos di Jogja, Depok, Jakarta, Surabaya, Bandung, dan kota besar lainnya atau cari kos di sekitar lokasi saya saat ini.",
  },
  {
    title: "Filter Pencarian",
    description:
      "Cari kos berdasarkan fasilitas kos yang kamu mau, lebih mudah dengan filter berdasarkan Kos AC, Kos Kamar mandi dalam, Kos Wifi. Bisa juga pilih kos dengan tipe kos, mulai dari Kos Harian, Kos Bulanan hingga Kos Tahunan. Mau cari Kos Bebas, Kos Pasutri, Kos Putra, Kos Putri, Kos Campur juga bisa.",
  },
  {
    title: "Chat dengan Penyewa",
    description:
      "Terhubung langsung dengan pemilik kos dan bisa bertanya lebih lanjut mengenai info kos melalui fitur chat di Mamikos.",
  },
  {
    title: "Sewa Langsung via Mamikos",
    description:
      "Bisa langsung mengajukan sewa kos di aplikasi atau website Mamikos. Bahkan, kamu bisa mulai sewa kos dari 3 bulan sebelum masuk kosan. Transaksi lebih aman, tanpa takut kamarnya penuh keduluan orang lain.",
  },
  {
    title: "Virtual Tour",
    description:
      "Virtual Tour Mamikos adalah media foto lingkungan kos dalam 360° yang diperuntukkan untuk kamu, para pencari kos, agar dapat mengetahui kondisi lingkungan kos secara detail tanpa harus survei langsung. Fitur ini cocok jadi andalanmu yang butuh kosan tapi tidak punya waktu untuk survei langsung, karena fitur ini menampilkan keadaan kos secara lengkap dari berbagai sudut.",
  },
  {
    title: "Pembayaran via Mamikos",
    description:
      "Bayar kosan anti ribet, cashless, dan jaminan aman, dengan beragam pilihan metode pembayaran. Nikmati promo-promo menarik yang diselenggarakan secara berkala untuk membantu kamu ngekos lebih hemat.",
  },
  {
    title: "MamiPoin",
    description:
      "Sebagai wujud terima kasih, Mamikos menghadirkan program loyalti melalui MamiPoin. Anak kos bisa mendapatkan poin sebagai cashback setiap melakukan pembayaran kos dan dapat dikumpulkan untuk digunakan sebagai tambahan diskon di pembayaran kos selanjutnya. Pemilik kos juga akan mendapatkan MamiPoin setiap melakukan aktivitas di Mamikos dan dapat dikumpulkan untuk ditukar menjadi beragam hadiah menarik atau tambahan diskon di pembayaran paket Mamikos GoldPlus.",
  },
  {
    title: "Kos Review",
    description:
      "Lihat review dari para penghuni kos agar kamu semakin yakin untuk sewa kos. Kamu juga bisa tulis pengalaman kamu selama ngekos untuk menambah info kos tersebut.",
  },
  {
    title: "Favorit",
    description:
      "Ketemu dengan kos idaman, bisa disimpan dulu melalui fitur favorit kos. Kos yang sudah kamu simpan, dapat kamu sewa di kemudian hari.",
  },
];

const HomeAbout = () => {
  // State untuk melacak status buka/tutup
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk mengubah status saat tombol diklik
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="w-full my-8 bg-gray-100">
      <div className="space-y-4 flex flex-col items-center max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Ayahandakos - Aplikasi Anak Kos No. 1 di Indonesia
        </h1>
        <p className="text-gray-600">
          Ayahandakos memanfaatkan teknologi untuk berkembang dari aplikasi cari
          kos menjadi aplikasi yang memudahkan calon anak kos untuk booking
          properti kos dan juga melakukan pembayaran kos. Saat ini kami memiliki
          beberapa kamar kos yang tersebar di lebih dari 21 kecamtan di seluruh
          Medan. Ayahandakos juga menyediakan layanan manajemen properti,
          bernama Singgahsini dan Apik, untuk menjawab kebutuhan calon penghuni
          yang menginginkan kos eksklusif atau kos murah. Ayahandakos berusaha
          untuk bisa terus menyajikan daftar rumah kos dengan data ketersediaan
          kamar yang akurat, fasilitas kos terperinci, dilengkapi dengan foto
          serta detail harga kos, dan kemudahan survei via fitur virtual tour
          agar calon penghuni mendapatkan kenyamanan dalam proses pencarian dan
          booking kos.
        </p>
        {/* Tombol Pemicu (Trigger) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex gap-4 items-center"
        >
          <span className="font-medium text-gray-800 text-left">
            Fitur yang dapat dimanfaatkan di Ayahandakos
          </span>

          <div className="">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </button>

        {/* Area Konten (Extended Section) */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* 
              Padding diselaraskan dengan tombol atas (tidak ada margin tambahan/berbeda).
              Padding kiri/kanan dihapus (atau disamakan 0) agar teks rata kiri dengan judul.
            */}
            <div className=" border-gray-100">
              <ul className="space-y-3 list-none text-gray-600 text-sm">
                {fiturAyahandakos.map((fitur, index) => (
                  <li className="flex gap-2">
                    <span className="font-semibold text-gray-800 min-w-[20px]">
                      {String.fromCharCode(97 + index)}.
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 inline">
                        {fitur.title}
                      </h4>
                      <p>{fitur.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
