import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock, Star } from "lucide-react";
import { useState, useEffect } from "react";

interface DetailData {
    name: string;
    country: string;
    description: string;
    imageUrl: string;
    rating: number;
    tags: string[];
    longDescription: string;
    bestTime: string;
    budget: string;
    duration: string;
    highlights: string[];
};


export function DestinationDetail() {
  
  const navigate = useNavigate();
  const { destinationId } = useParams();

  const [destination, setDestination] = useState<DetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/destination/${destinationId}`);
        const data = await response.json();
        
        setDestination(data);
      } catch (error) {
        console.error("Fail to Load:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (destinationId) {
      fetchDestinationData();
    }
    window.scrollTo(0, 0);
  }, [destinationId]); 

  
  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading Destination Details...</div>;
  if (!destination) return <div>Can't find info.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[30vh] overflow-hidden max-w-5xl mx-auto">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover rounded-b-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-b-2xl"></div>
        
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/95 hover:bg-white rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-2 mb-2 text-white/90">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{destination.country}</span>
            </div>
            <h1 className="text-white mb-3">{destination.name}</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-white text-sm">{destination.rating}</span>
              </div>
              {destination.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <Calendar className="w-6 h-6 text-blue-600 mb-2" />
            <div className="text-xs text-gray-500 mb-1">Best Time</div>
            <div className="text-gray-900 text-sm">{destination.bestTime}</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <DollarSign className="w-6 h-6 text-green-600 mb-2" />
            <div className="text-xs text-gray-500 mb-1">Budget</div>
            <div className="text-gray-900 text-sm">{destination.budget}</div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <Clock className="w-6 h-6 text-purple-600 mb-2" />
            <div className="text-xs text-gray-500 mb-1">Duration</div>
            <div className="text-gray-900 text-sm">{destination.duration}</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-gray-900 mb-3">About</h2>
          <p className="text-gray-600 leading-relaxed">{destination.longDescription}</p>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-gray-900 mb-4">Highlights</h2>
          <div className="space-y-3">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 flex-1">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-center text-gray-500 text-sm">
            © 2025 TravelHub Powered By Gemini
          </p>
        </div>
      </footer>
    </div>
  );
}