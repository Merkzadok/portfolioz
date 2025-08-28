import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-current" />{" "}
              by GanErdene
            </p>
          </div>

          <div className="text-gray-400 text-sm">© 2025 GanErdene.G</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
