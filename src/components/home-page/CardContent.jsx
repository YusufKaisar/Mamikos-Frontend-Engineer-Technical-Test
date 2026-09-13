import React from "react";
import ibukos from "../../assets/landing-owner-entry.webp";
import apik from "../../assets/ic_apik_full.svg";
import singgahsini from "../../assets/ic_singgahsini_full.svg";

const CardContent = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto my-8">
      <div className="grid grid-cols-1 gap-8 mx-8">
        <div className="flex items-center justify-between h-40 border border-gray-200 rounded-lg gap-4">
          <div className="px-4">
            <h1 className="font-bold text-3xl">
              Daftarkan Kos Anda di Ayahandakos
            </h1>
            <p>Berbagai fitur dan layanan untuk meningkatkan bisnis kos Anda</p>
            <button className=" border border-green-600 text-green-600 px-4 py-2 rounded-md mt-2 hover:border-green-400 hover:text-green-400 transition">
              Pelajari Lebih Lanjut
            </button>
          </div>
          <div className="h-40 w-64">
            <img
              src={ibukos}
              alt="Ibukos"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-190 border border-transparent rounded-lg px-4 py-8 flex flex-col gap-3 shadow-lg">
          <h1 className="font-bold text-2xl">Fitur Unggulan</h1>
          <p>
            Untungnya ada fitur Survei Kos di Mamikos. Cari, pilih, survei,
            hingga sewa kos idaman dijamin aman dan GRATIS.
          </p>
          <a href="#" className="underline text-sm">
            Baca selengkapnya
          </a>
        </div>

        <div className="border border-transparent shadow-lg rounded-lg px-4 py-8 flex justify-between">
          <div>
            <h1 className="font-bold text-2xl">
              Kos Dikelola Mamikos, Terjamin Nyaman
            </h1>
            <p>
              Disurvey langsung oleh Mamikos. Lokasi terverifikasi, bangunan kos
              lolos seleksi.
            </p>
          </div>
          <div className="flex gap-12">
            <img src={singgahsini} alt="" className="w-30" />
            <img src={apik} alt="" className="w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContent;
