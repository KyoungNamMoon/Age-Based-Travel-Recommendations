import { useState, useEffect, useRef } from "react";
import { DestinationCard } from "./DestinationCard";
import { Users, Baby, Sparkles, Heart, Briefcase, Home as HomeIcon, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { UniqueDestinations } from "./UniqueDestinations";
import { MonthlyDestinations } from "./MonthlyDestinations";

// --- Type Definitions ---
interface ApiDestination {
  name: string;
  country: string;
  description: string;
  tags: string[];
}

interface RecommendationsResponse {
  teens?: ApiDestination[];
  twenties?: ApiDestination[];
  thirties?: ApiDestination[];
  forties?: ApiDestination[];
  fifties?: ApiDestination[];
  [key: string]: ApiDestination[] | undefined;
}

interface AgeGroupConfig {
  id: string;
  label: string;
  age: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

// --- Main Component ---
export function Home() {
  const [recommendations, setRecommendations] = useState<RecommendationsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Error state defined
  const [selectedAge, setSelectedAge] = useState<string>("twenties");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // API URL configuration
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  // Data fetching
  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      
      try {
        console.log(`Requesting: ${API_URL}/api/recommendations`);
        const res = await fetch(`${API_URL}/api/recommendations`);
        
        if (!res.ok) {
          throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Data received successfully:", data);
        setRecommendations(data);

      } catch (err: any) {
        console.error("Failed to fetch data:", err);
        setError(err.message);
        setRecommendations(null); 
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [API_URL]);

  // Age group configuration
  const ageGroupsConfig: AgeGroupConfig[] = [
    { id: "teens", label: "Teens", age: "13-19 yrs", icon: <Sparkles className="w-6 h-6" />, color: "text-purple-600", bgColor: "bg-purple-50 hover:bg-purple-100" },
    { id: "twenties", label: "20s", age: "20-29 yrs", icon: <Users className="w-6 h-6" />, color: "text-blue-600", bgColor: "bg-blue-50 hover:bg-blue-100" },
    { id: "thirties", label: "30s", age: "30-39 yrs", icon: <Briefcase className="w-6 h-6" />, color: "text-green-600", bgColor: "bg-green-50 hover:bg-green-100" },
    { id: "forties", label: "40s", age: "40-49 yrs", icon: <Heart className="w-6 h-6" />, color: "text-orange-600", bgColor: "bg-orange-50 hover:bg-orange-100" },
    { id: "fifties", label: "50s+", age: "50+ yrs", icon: <HomeIcon className="w-6 h-6" />, color: "text-indigo-600", bgColor: "bg-indigo-50 hover:bg-indigo-100" }
  ];

  // Filtering currently selected data
  const currentDestinations = recommendations 
    ? (recommendations[selectedAge] || []) 
    : [];

  const currentGroupConfig = ageGroupsConfig.find(g => g.id === selectedAge);

  const scrollLeft = () => scrollContainerRef.current?.scrollBy({ left: -400, behavior: 'smooth' });
  const scrollRight = () => scrollContainerRef.current?.scrollBy({ left: 400, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-gray-900 mb-2 font-bold text-2xl">✈️ Destinations Tailored to Your Age</h1>
            <p className="text-gray-600">Discover the best travel destinations for your age group</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Age Group Selection */}
        <div className="mb-12">
          <h2 className="text-gray-800 mb-6 text-center font-semibold">Select Your Age Group</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {ageGroupsConfig.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedAge(group.id)}
                className={`
                  p-6 rounded-2xl border-2 transition-all duration-200
                  ${selectedAge === group.id 
                    ? `${group.bgColor} border-current ${group.color} shadow-lg scale-105` 
                    : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={selectedAge === group.id ? group.color : 'text-gray-400'}>
                    {group.icon}
                  </div>
                  <div className="text-center">
                    <div className={selectedAge === group.id ? 'font-bold' : 'text-gray-700'}>
                      {group.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{group.age}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recommended Destinations List */}
        <div className="space-y-6 min-h-[400px]">
          <div className="text-center">
            <h2 className="text-gray-900 mb-2 font-bold text-xl">
              Recommended Destinations for {currentGroupConfig?.label}
            </h2>
            <p className="text-gray-600">
              {loading 
                ? "AI is analyzing travel trends..." 
                : `We've curated the most popular spots for ${currentGroupConfig?.label} travelers`}
            </p>
          </div>

          {/* Loading and Error Handling */}
          {loading ? (
            <div className="flex flex-col justify-center items-center h-64 gap-4">
              <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
              <span className="text-gray-500 text-sm">Please wait a moment...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col justify-center items-center h-64 gap-4 text-center">
              <div className="text-red-500 font-bold text-lg">⚠️ Failed to load data</div>
              <p className="text-gray-500 text-sm">Please ensure the backend server is running.<br/>(Error message: {error})</p>
            </div>
          ) : (
            <div className="relative">
              <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-5">
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth p-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {currentDestinations.length > 0 ? (
                  currentDestinations.map((dest: ApiDestination, index: number) => (
                    <div key={index} className="flex-shrink-0 w-[350px]">
                      <SmartDestinationCard destination={dest} />
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center py-20 text-gray-500">
                    No recommendation data available for this age group.
                  </div>
                )}
              </div>

              <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-5">
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          )}
        </div>
      </main>

      <section className="bg-gray-50 py-8"><MonthlyDestinations /></section>
      <section className="bg-white py-8"><UniqueDestinations /></section>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">© 2025 TravelHub Powered By Gemini</p>
        </div>
      </footer>
    </div>
  );
}

// Internal Component (Automatic Image Loading)
function SmartDestinationCard({ destination }: { destination: ApiDestination }) {
  const [imageUrl, setImageUrl] = useState<string>(
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60"
  );
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    if (!destination.name) return;
    fetch(`${API_URL}/api/gallery?keyword=${encodeURIComponent(destination.name)}&page=1`)
      .then(res => res.json())
      .then(photos => {
        if (Array.isArray(photos) && photos.length > 0) setImageUrl(photos[0]);
      })
      .catch(err => console.warn("Image fetch error:", err));
  }, [destination.name, API_URL]);

  return (
    <DestinationCard 
      name={destination.name}
      country={destination.country}
      description={destination.description}
      imageUrl={imageUrl}
      rating={4.8}
      tags={destination.tags}
    />
  );
}