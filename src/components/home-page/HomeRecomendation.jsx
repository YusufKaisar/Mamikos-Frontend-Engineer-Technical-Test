import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // hapus jika tidak pakai react-router
import propertiesData from "../../data/properties.json";
import { ChevronRight, ChevronLeft } from "lucide-react";

const formatRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);

const KostCard = ({ kost, onClick }) => (
  <button
    onClick={() => onClick(kost.id)}
    className="flex-none w-73 snap-start text-left bg-white rounded-xl border border-gray-200 
               shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden focus:outline-none 
               focus:ring-2 focus:ring-blue-500"
  >
    <div className="relative h-36 w-full bg-gray-100">
      <img
        src={kost.foto_url?.[0]}
        alt={kost.nama_kost}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">
        {kost.tipe_kost}
      </span>
    </div>

    <div className="p-3 space-y-1">
      <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
        {kost.nama_kost}
      </h3>
      <p className="text-xs text-gray-500">{kost.spesifikasi_kamar?.ukuran}</p>
      <p className="text-blue-600 font-bold text-sm pt-1">
        {formatRupiah(kost.harga_per_bulan)}
        <span className="text-gray-400 font-normal text-xs"> /bulan</span>
      </p>
    </div>
  </button>
);

// Easing function: easeInOutQuad
const easeInOutQuad = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

// Custom smooth scroll dengan requestAnimationFrame, aman dari konflik scroll-snap
const smoothScrollTo = (element, targetLeft, duration = 400) => {
  const startLeft = element.scrollLeft;
  const distance = targetLeft - startLeft;
  const startTime = performance.now();

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    element.scrollLeft = startLeft + distance * easeInOutQuad(progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const HomeRecomendation = () => {
  const navigate = useNavigate(); // hapus jika tidak pakai react-router
  const scrollRef = useRef(null);

  const kostList = propertiesData.filter((item) => item.tersedia);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 270 + 16; // lebar card + gap
    const delta = direction === "next" ? cardWidth * 4 : -cardWidth * 4;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const targetLeft = Math.max(
      0,
      Math.min(container.scrollLeft + delta, maxScrollLeft),
    );

    // Matikan snap sementara supaya animasi rAF tidak "ditarik paksa" ke snap point
    container.style.scrollSnapType = "none";

    smoothScrollTo(container, targetLeft, 450);

    // Nyalakan lagi snap setelah animasi selesai
    window.clearTimeout(container._snapTimeout);
    container._snapTimeout = window.setTimeout(() => {
      container.style.scrollSnapType = "";
    }, 500);
  };

  const handleCardClick = (id) => {
    navigate(`/kost/${id}`);
  };

  if (kostList.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto my-8">
      <div className="space-y-4 mx-8">
        <div className="flex items-center justify-between ">
          <h2 className="text-xl font-bold text-gray-800">
            Rekomendasi Kost di Medan
          </h2>
          <div className="hidden sm:flex gap-4 items-center">
            <button
              onClick={() => navigate("/find")}
              className="border border-gray-400 px-4 py-2 rounded-md text-xs"
            >
              Lihat Semua
            </button>

            <div className="w-px h-6 bg-gray-300"></div>

            <button
              onClick={() => scrollByAmount("prev")}
              aria-label="Sebelumnya"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 
                        hover:bg-gray-100 active:scale-95 transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scrollByAmount("next")}
              aria-label="Selanjutnya"
              className="h-9 w-9 flex items-center justify-center rounded-full border border-gray-300 
                        hover:bg-gray-100 active:scale-95 transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2
                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {kostList.map((kost) => (
            <KostCard key={kost.id} kost={kost} onClick={handleCardClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecomendation;
