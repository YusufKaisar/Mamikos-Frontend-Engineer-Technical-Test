import React from "react";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import propertiesData from "../../data/properties.json";

// TODO: ganti dengan foto asli tiap kecamatan di Medan (landmark/jalan utama daerah tsb)
const kecamatanImages = {
  "Medan Petisah":
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=600&q=80",
  "Medan Baru":
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
  "Medan Selayang":
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
  "Medan Johor":
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=600&q=80",
  "Medan Kota":
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
  "Medan Timur":
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=600&q=80",
  "Medan Tuntungan":
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=80",
};

const fallbackImage =
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80";

const AreaKos = () => {
  const navigate = useNavigate(); // hapus jika tidak pakai react-router

  // Hitung jumlah kost per kecamatan dari data, lalu urutkan dari terbanyak
  const topKecamatan = useMemo(() => {
    const counts = {};

    propertiesData.forEach((item) => {
      const kec = item.lokasi?.kecamatan;
      if (!kec) return;
      counts[kec] = (counts[kec] || 0) + 1;
    });

    return Object.entries(counts)
      .map(([kecamatan, jumlah]) => ({ kecamatan, jumlah }))
      .sort((a, b) => b.jumlah - a.jumlah)
      .slice(0, 7); // 7 kecamatan teratas, sisa 1 slot untuk "Lihat Semua"
  }, []);

  const handleAreaClick = (kecamatan) => {
    navigate(`/find?kecamatan=${encodeURIComponent(kecamatan)}`);
  };

  const handleSeeAllClick = () => {
    navigate("/find");
  };

  if (topKecamatan.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto my-8">
      <div className="mx-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Area Kos Terpopuler di Medan
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {topKecamatan.map(({ kecamatan, jumlah }) => (
            <button
              key={kecamatan}
              onClick={() => handleAreaClick(kecamatan)}
              className="group relative h-48 rounded-xl overflow-hidden shadow-sm 
                       hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <img
                src={kecamatanImages[kecamatan] || fallbackImage}
                alt={kecamatan}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative top-0 bottom-0 left-0 right-0 p-3 text-center">
                <p className="text-white font-semibold text-xl hover:underline">
                  {kecamatan}
                </p>
              </div>
            </button>
          ))}

          {/* Kotak ke-8: selalu Lihat Semua */}
          <button
            onClick={handleSeeAllClick}
            className="h-48 rounded-xl border-transparent shadow-lg
                     flex flex-col items-center justify-center gap-1 text-gray-500 hover:underline"
          >
            <span className="text-xl font-medium">Lihat Semua →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AreaKos;
