import React from "react";
import { Building2, Phone, Mail, BadgeCheck, Users } from "lucide-react";
import isoLogo from "../assets/iso-certificate-v2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 mt-auto mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Kolom 1: Brand & Deskripsi */}
          <div>
            <div className="flex items-center gap-2 text-green-600 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">
                Ayahandakos
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Platform pencarian kost terpercaya di Medan. Temukan tempat
              tinggal nyaman yang sesuai dengan kebutuhan dan *budget* Anda.
            </p>
            {/* Social Media Minimalis */}
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-green-600 transition">
                <BadgeCheck className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-600 transition">
                <Users className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Bantuan (Sama dengan Navbar) */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/pesanan"
                  className="text-gray-500 hover:text-green-600 text-sm transition"
                >
                  Pesanan Saya
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="text-gray-500 hover:text-green-600 text-sm transition"
                >
                  Download Aplikasi
                </a>
              </li>
              <li>
                <a
                  href="/syarat"
                  className="text-gray-500 hover:text-green-600 text-sm transition"
                >
                  Syarat & Ketentuan
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Customer Service (CS) */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Hubungi Kami (CS)
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-green-600" />
                <div>
                  <p>+62 812-3456-7890</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Senin - Minggu (08:00 - 20:00)
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="h-4 w-4 text-green-600" />
                <a
                  href="mailto:cs.ayahandakos@gmail.com"
                  className="hover:text-green-600 transition"
                >
                  cs.ayahandakos@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis Pemisah & Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-sm text-gray-400">
            <img src={isoLogo} alt="ISO Logo" className="h-12 w-12" />
          </div>
          <p className=" text-xs text-center md:text-left">
            &copy; {currentYear} Ayahandakos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
