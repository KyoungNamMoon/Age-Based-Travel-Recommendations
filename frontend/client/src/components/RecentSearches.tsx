import { Hotel } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SearchHistory {
  title: string;
  dateRange: string;
  details: string;
}

export function RecentSearches() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const recentSearches: SearchHistory[] = [
    {
      title: "Stays in South Korea",
      dateRange: "Sun, Dec 7 - Tue, Dec 9",
      details: "2 travelers • 1 room"
    },
    {
      title: "Stays in St. Thomas",
      dateRange: "Sun, Dec 7 - Mon, Dec 8",
      details: "2 travelers • 1 room"
    },
    {
      title: "Stays in Paris",
      dateRange: "Mon, Dec 15 - Wed, Dec 17",
      details: "1 traveler • 1 room"
    },
    {
      title: "Stays in Tokyo",
      dateRange: "Fri, Dec 20 - Sun, Dec 22",
      details: "3 travelers • 2 rooms"
    },
    {
      title: "Stays in New York",
      dateRange: "Sat, Jan 4 - Tue, Jan 7",
      details: "2 travelers • 1 room"
    },
    {
      title: "Stays in London",
      dateRange: "Wed, Jan 10 - Fri, Jan 12",
      details: "4 travelers • 2 rooms"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h3 className="text-gray-900 mb-4">Your recent searches</h3>
      
      {/* Carousel container */}
      <div className="relative">
        {/* Left arrow button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-5"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scroll container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recentSearches.map((search, index) => (
            <button
              key={index}
              className="bg-gray-100 hover:bg-gray-200 rounded-xl p-4 text-left transition-colors flex items-start gap-4 flex-shrink-0 w-[350px]"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <Hotel className="w-5 h-5 text-gray-700" />
              </div>
              
              <div className="flex-1">
                <div className="text-gray-900 font-medium mb-1">{search.title}</div>
                <div className="text-gray-600 text-sm">{search.dateRange}</div>
                <div className="text-gray-600 text-sm">{search.details}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-5"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
}