import { Plane, SlidersHorizontal } from "lucide-react";

interface HeaderProps {
  onFilterClick: () => void;
  activeFilterCount: number;
}

export function Header({ onFilterClick, activeFilterCount }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Logo (Click to go home) */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900 font-bold text-xl">TravelHub</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Flights</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Car Rentals</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Support</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onFilterClick}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden md:inline">Filters</span>
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
