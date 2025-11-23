import { MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DestinationCardProps {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
}

export function DestinationCard({ 
  name, 
  country, 
  description, 
  imageUrl, 
  rating,
  tags 
}: DestinationCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/destination/${encodeURIComponent(name)}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500">{country}</span>
        </div>
        
        <p className="text-gray-800 mb-2">{name}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}