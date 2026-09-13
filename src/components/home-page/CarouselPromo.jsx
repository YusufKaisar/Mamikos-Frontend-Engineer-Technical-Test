import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DELAY = 4000;
const SLIDE_WIDTH = 40; // dalam persen — SATU-SATUNYA tempat ubah lebar slide
const SLIDE_OFFSET = (100 - SLIDE_WIDTH) / 2; // otomatis mengikuti SLIDE_WIDTH

const CarouselPromo = ({ images = [] }) => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);
  const autoplayRef = useRef(null);

  const slides =
    images.length > 0 ? [images[images.length - 1], ...images, images[0]] : [];

  const [current, setCurrent] = useState(1);
  const [withTransition, setWithTransition] = useState(true);

  const goTo = useCallback((index) => {
    setWithTransition(true);
    setCurrent(index);
  }, []);

  const handleNext = useCallback(() => {
    setWithTransition(true);
    setCurrent((c) => c + 1); // hanya boleh nambah 1, tidak boleh lompat jauh
  }, []);

  const handlePrev = () => goTo(current - 1);

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    if (images.length <= 1) return;
    autoplayRef.current = setInterval(handleNext, AUTOPLAY_DELAY);
  }, [images.length, handleNext]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay]);

  const handleTransitionEnd = (e) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;

    if (current >= slides.length - 1) {
      setWithTransition(false);
      setCurrent(1);
    } else if (current <= 0) {
      setWithTransition(false);
      setCurrent(slides.length - 2);
    }
  };

  const handlePointerDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragDistance.current = 0;
    stopAutoplay();
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    dragDistance.current = e.clientX - startX.current;
  };

  const handlePointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const threshold = 50;
    if (dragDistance.current > threshold) {
      handlePrev();
    } else if (dragDistance.current < -threshold) {
      handleNext();
    }
    dragDistance.current = 0;
    startAutoplay();
  };

  const realIndex =
    current <= 0
      ? images.length - 1
      : current >= slides.length - 1
        ? 0
        : current - 1;

  if (images.length === 0) {
    return (
      <div className="w-full max-w-2xl mx-auto aspect-[16/9] flex items-center justify-center bg-gray-100 rounded-xl text-gray-400 text-sm">
        Tidak ada flyer untuk ditampilkan
      </div>
    );
  }

  return (
    <section className="w-full mx-auto max-w-7xl select-none my-8">
      <div className="mx-8">
        <div className="relative overflow-hidden mx-auto">
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTransitionEnd={handleTransitionEnd}
            className={`flex items-center cursor-grab active:cursor-grabbing ${
              withTransition ? "transition-transform duration-300 ease-out" : ""
            }`}
            style={{
              transform: `translateX(calc(-${current * SLIDE_WIDTH}% + ${SLIDE_OFFSET}%))`,
            }}
          >
            {slides.map((img, i) => {
              const isActive = i === current;
              return (
                <div
                  key={i}
                  style={{ width: `${SLIDE_WIDTH}%` }}
                  className="flex-shrink-0 px-2"
                >
                  <img
                    src={img.src}
                    alt={img.alt || "Flyer promo"}
                    draggable={false}
                    className={`w-full object-cover rounded-xl transition-all duration-300 ease-out ${
                      isActive ? "scale-105 opacity-100" : "scale-95 opacity-60"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => {
              handlePrev();
              startAutoplay();
            }}
            aria-label="Sebelumnya"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => navigate("/promo")}
            className="text-sm font-medium  hover:underline transition-colors"
          >
            Lihat semua promo
          </button>

          <button
            onClick={() => {
              handleNext();
              startAutoplay();
            }}
            aria-label="Selanjutnya"
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselPromo;
