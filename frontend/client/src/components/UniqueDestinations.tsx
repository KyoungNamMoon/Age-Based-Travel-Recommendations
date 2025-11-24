import { Star, ChevronLeft, ChevronRight, Flag } from "lucide-react";
import { useRef } from "react";

interface UniqueDestination {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export function UniqueDestinations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const destinations: UniqueDestination[] = [
    {
      title: "Cozy Mountain Cabin",
      location: "Colorado",
      rating: 9.1,
      reviewCount: 128,
      imageUrl: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Luxury Pool Villa",
      location: "Tennessee",
      rating: 9.6,
      reviewCount: 72,
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Private Hot Tub Retreat",
      location: "Virginia",
      rating: 9.2,
      reviewCount: 92,
      imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Log Cabin Estate",
      location: "Tennessee",
      rating: 9.2,
      reviewCount: 157,
      imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Modern Treehouse",
      location: "Oregon",
      rating: 8.8,
      reviewCount: 64,
      imageUrl: "https://images.unsplash.com/photo-1501685454-aa7aa2e9d97e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      title: "Glass Dome House",
      location: "Iceland",
      rating: 9.5,
      reviewCount: 203,
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
      <div className="mb-6">
        <div> 
          <div className="flex items-center gap-2 mb-2">
          <Flag className="w-6 h-6 text-blue-600" />
          <h3 className="text-gray-900 mb-2">이색여행지</h3>
        </div>
        <p className="text-gray-600">
          Special accommodations worth visiting, December 19th - December 21st
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
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {destinations.map((destination, index) => (
            <button
              key={index}
              className="group relative rounded-2xl overflow-hidden flex-shrink-0 w-[280px] h-[300px] hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <img 
                src={destination.imageUrl}
                alt={destination.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              
              {/* Navigation arrows on image */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white">
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Rating badge */}
              <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-lg flex items-center gap-1">
                <span className="text-sm font-semibold">{destination.rating}</span>
              </div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-semibold mb-1 text-left">{destination.title}</h4>
                <p className="text-sm text-gray-200 text-left">{destination.location}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-200">
                    Excellent · {destination.reviewCount} reviews
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
