import { Star, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { useRef } from "react";

interface MonthlyDestination {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: string;
  imageUrl: string;
  badge?: string;
}

export function MonthlyDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const destinations: MonthlyDestination[] = [
    {
      title: "Lapland Winter Wonderland",
      location: "Finland",
      rating: 9.4,
      reviewCount: 156,
      price: "$2,499",
      imageUrl: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Best for December"
    },
    {
      title: "Northern Lights Experience",
      location: "Norway",
      rating: 9.6,
      reviewCount: 203,
      price: "$2,899",
      imageUrl: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Limited Time"
    },
    {
      title: "Swiss Alps Ski Resort",
      location: "Switzerland",
      rating: 9.3,
      reviewCount: 189,
      price: "$3,299",
      imageUrl: "https://images.unsplash.com/photo-1551524164-687a55dd1126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Trending"
    },
    {
      title: "Christmas Markets Tour",
      location: "Germany",
      rating: 9.1,
      reviewCount: 142,
      price: "$1,899",
      imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Popular"
    },
    {
      title: "Hot Springs Retreat",
      location: "Iceland",
      rating: 9.5,
      reviewCount: 178,
      price: "$2,199",
      imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "Highly Rated"
    },
    {
      title: "Winter Safari Adventure",
      location: "Canada",
      rating: 9.0,
      reviewCount: 134,
      price: "$2,699",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      badge: "New"
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-gray-900">이달의 여행지</h3>
          </div>
          <p className="text-gray-600">
            Special winter travel packages curated for December 2024
          </p>
        </div>
      </div>
      
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
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((destination, index) => (
            <button
              key={index}
              className="group relative rounded-2xl overflow-hidden flex-shrink-0 w-[350px] bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={destination.imageUrl}
                  alt={destination.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                {destination.badge && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.badge}
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-gray-900 font-semibold mb-1 text-left">
                      {destination.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-left">{destination.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-600 font-bold text-lg">{destination.price}</div>
                    <div className="text-xs text-gray-500">per person</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <div className="bg-blue-600 text-white px-2 py-0.5 rounded text-sm font-semibold">
                      {destination.rating}
                    </div>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="text-xs text-gray-500">
                    {destination.reviewCount} reviews
                  </span>
                </div>
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
