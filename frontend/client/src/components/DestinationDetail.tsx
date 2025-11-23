import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, DollarSign, Clock, Star, Users, Plane } from "lucide-react";

interface DetailData {
  [key: string]: {
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
    gallery: string[];
    tips: string[];
  };
}

export function DestinationDetail() {
  const navigate = useNavigate();
  const { destinationId } = useParams();

  const destinationData: DetailData = {
    "부탄": {
      name: "부탄",
      country: "부탄",
      description: "히말라야의 평화로운 불교 왕국",
      imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      tags: ["문화", "평화", "명상"],
      longDescription: "히말라야 산맥에 자리한 부탄은 '행복의 나라'로 불리는 신비로운 불교 왕국입니다. GNH(국민총행복)를 국가 정책의 중심에 두고 있으며, 전통 문화와 자연 환경을 보존하는 데 큰 가치를 두고 있습니다. 타익촌 수도원을 비롯한 많은 사원과 요새가 있으며, 순수한 자연 경관과 따뜻한 사람들이 여행자를 맞이합니다.",
      bestTime: "3월-5월, 9월-11월",
      budget: "400만원 - 600만원",
      duration: "7일 - 10일",
      highlights: [
        "타익촌 수도원 - 절벽에 매달린 신비로운 사원",
        "팀푸 - 부탄의 수도, 전통 시장 탐방",
        "푸나카 종 - 아름다운 요새와 사원",
        "다양한 불교 축제 체험",
        "히말라야 트레킹"
      ],
      gallery: [
        "https://images.unsplash.com/photo-1665730012856-7acf680ad1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaHV0YW4lMjBtb25hc3Rlcnl8ZW58MXx8fHwxNzYzODY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1629778634400-21720d1b92b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaHV0YW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzODY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1552590635-27c2c2128abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZvb2R8ZW58MXx8fHwxNzYzODY3NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      tips: [
        "부탄은 일일 관광료가 책정되어 있어 비용이 높은 편입니다",
        "전통 의상인 '고' 착용이 권장됩니다",
        "고산병 예방을 위해 충분한 휴식을 취하세요",
        "현지 화폐는 Ngultrum이지만 인도 루피도 사용 가능합니다",
        "영어가 널리 통용되어 의사소통이 원활합니다"
      ]
    },
    // 더 많은 여행지 데이터를 추가할 수 있습니다
  };

  const destination = destinationData[destinationId || ""] || destinationData["부탄"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>돌아가기</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-white mb-4">{destination.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span>{destination.rating}</span>
              </div>
              <div className="flex gap-2">
                {destination.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Calendar className="w-8 h-8 text-blue-600 mb-3" />
            <div className="text-sm text-gray-500 mb-1">최적 여행 시기</div>
            <div className="text-gray-900">{destination.bestTime}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <DollarSign className="w-8 h-8 text-green-600 mb-3" />
            <div className="text-sm text-gray-500 mb-1">평균 예산</div>
            <div className="text-gray-900">{destination.budget}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Clock className="w-8 h-8 text-purple-600 mb-3" />
            <div className="text-sm text-gray-500 mb-1">추천 기간</div>
            <div className="text-gray-900">{destination.duration}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <Plane className="w-8 h-8 text-orange-600 mb-3" />
            <div className="text-sm text-gray-500 mb-1">여행 난이도</div>
            <div className="text-gray-900">중급</div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-12">
          <h2 className="text-gray-900 mb-4">여행지 소개</h2>
          <p className="text-gray-700 leading-relaxed">{destination.longDescription}</p>
        </div>

        {/* Highlights */}
        <div className="bg-white rounded-2xl p-8 shadow-md mb-12">
          <h2 className="text-gray-900 mb-6">주요 볼거리</h2>
          <div className="space-y-3">
            {destination.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-700 flex-1">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-gray-900 mb-6">갤러리</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.gallery.map((image, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img 
                  src={image} 
                  alt={`${destination.name} ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md">
          <h2 className="text-gray-900 mb-6">💡 여행 팁</h2>
          <div className="space-y-4">
            {destination.tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 flex-1">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 나이별 여행지 추천. 당신의 완벽한 여행을 위해 ✨
          </p>
        </div>
      </footer>
    </div>
  );
}
