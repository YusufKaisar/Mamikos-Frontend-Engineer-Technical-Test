import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import HomeHeroImage from "../../assets/buildings.png";

const HomeHero = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/cari?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="bg-white max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Mau Cari Kost?</h1>
            <p className="text-gray-600">
              Dapatkan infonya dan langsung sewa di Ayahandakos.
            </p>
          </div>
          <div className="flex items-center w-full max-w-md rounded-md border-gray-300 bg-white p-1 shadow-md ">
            <Search className="ml-2" size={18} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Masukkan nama lokasi/area/alamat"
              className=" ml-2 flex-1 outline-none text-xs text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              className="bg-green-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600 transition"
              aria-label="Cari"
            >
              Cari
            </button>
          </div>
        </div>
        <div>
          <img src={HomeHeroImage} alt="Home Hero" className="mt-8" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
