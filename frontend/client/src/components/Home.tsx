import { useState, useRef } from "react";
import { DestinationCard } from "./DestinationCard";
import { Users, Baby, Sparkles, Heart, Briefcase, Home as HomeIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { UniqueDestinations } from "./UniqueDestinations";
import { MonthlyDestinations } from "./MonthlyDestinations";

interface Destination {
  name: string;
  country: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
}

interface AgeGroup {
  id: string;
  label: string;
  age: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  destinations: Destination[];
}

export function Home() {
  const ageGroups: AgeGroup[] = [
    {
      id: "kids",
      label: "어린이",
      age: "0-12세",
      icon: <Baby className="w-6 h-6" />,
      color: "text-pink-600",
      bgColor: "bg-pink-50 hover:bg-pink-100",
      destinations: [
        {
          name: "디즈니랜드",
          country: "미국",
          description: "가족과 함께하는 꿈과 마법의 테마파크",
          imageUrl: "https://images.unsplash.com/photo-1762440933469-f6d6cc097fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjB0aGVtZSUyMHBhcmt8ZW58MXx8fHwxNzYzODYxMTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["가족", "테마파크", "엔터테인먼트"]
        },
        {
          name: "몰디브",
          country: "몰디브",
          description: "깨끗한 바다와 해변, 가족 리조트",
          imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjM4NTA5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["해변", "리조트", "가족"]
        },
        {
          name: "싱가포르",
          country: "싱가포르",
          description: "유니버설 스튜디오와 다양한 어린이 시설",
          imageUrl: "https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2MzgyMDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["도시", "테마파크", "교육"]
        },
        {
          name: "도쿄",
          country: "일본",
          description: "디즈니와 애니메이션 테마파크의 천국",
          imageUrl: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbiUyMHRva3lvfGVufDF8fHx8MTc2Mzc4MTYzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["테마파크", "애니메이션", "가족"]
        },
        {
          name: "호주",
          country: "호주",
          description: "코알라와 캥거루를 만나는 동물 체험",
          imageUrl: "https://images.unsplash.com/photo-1528077064587-a9bff356f92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXN0cmFsaWElMjBiZWFjaHxlbnwxfHx8fDE3NjM4NjY3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["동물", "자연", "체험"]
        },
        {
          name: "런던",
          country: "영국",
          description: "해리포터 스튜디오와 박물관 투어",
          imageUrl: "https://images.unsplash.com/photo-1575323734774-d6c47992c537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBjaXR5fGVufDF8fHx8MTc2MzgwNjczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["문화", "교육", "체험"]
        }
      ]
    },
    {
      id: "teens",
      label: "청소년",
      age: "13-19세",
      icon: <Sparkles className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      destinations: [
        {
          name: "파리",
          country: "프랑스",
          description: "낭만적인 유럽 문화와 예술의 중심지",
          imageUrl: "https://images.unsplash.com/photo-1661617326657-18769131a0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHBhcmlzfGVufDF8fHx8MTc2Mzg2MTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["문화", "예술", "역사"]
        },
        {
          name: "발리",
          country: "인도네시아",
          description: "서핑과 자연을 즐기는 청춘의 섬",
          imageUrl: "https://images.unsplash.com/photo-1672841828459-bc913fdcd995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZHxlbnwxfHx8fDE3NjM3OTI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["비치", "서핑", "자연"]
        },
        {
          name: "두바이",
          country: "아랍에미리트",
          description: "모던하고 화려한 미래 도시",
          imageUrl: "https://images.unsplash.com/photo-1601624311242-d7de9926253f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkdWJhaXxlbnwxfHx8fDE3NjM4NjExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["쇼핑", "럭셔리", "도시"]
        },
        {
          name: "바르셀로나",
          country: "스페인",
          description: "가우디 건축과 해변이 어우러진 도시",
          imageUrl: "https://images.unsplash.com/photo-1593368858664-a7fe556ab936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzcGFpbnxlbnwxfHx8fDE3NjM4MDIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["문화", "해변", "예술"]
        },
        {
          name: "아이슬란드",
          country: "아이슬란드",
          description: "오로라와 신비로운 자연 경관",
          imageUrl: "https://images.unsplash.com/photo-1660295295985-005be316dba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbmF0dXJlfGVufDF8fHx8MTc2Mzg2NjczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["자연", "오로라", "모험"]
        },
        {
          name: "뉴욕",
          country: "미국",
          description: "브로드웨이와 쇼핑의 메카",
          imageUrl: "https://images.unsplash.com/photo-1513563326940-e76e4641069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0fGVufDF8fHx8MTc2MzgyMDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["도시", "쇼핑", "문화"]
        }
      ]
    },
    {
      id: "twenties",
      label: "20대",
      age: "20-29세",
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      destinations: [
        {
          name: "스위스",
          country: "스위스",
          description: "등산과 트레킹의 성지, 알프스의 절경",
          imageUrl: "https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NjM4NDQ2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["등산", "자연", "모험"]
        },
        {
          name: "탄자니아",
          country: "탄자니아",
          description: "사파리 투어와 야생동물의 천국",
          imageUrl: "https://images.unsplash.com/photo-1602410132231-9e6c692e02db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBzYWZhcml8ZW58MXx8fHwxNzYzODYxMTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["사파리", "동물", "모험"]
        },
        {
          name: "교토",
          country: "일본",
          description: "전통과 현대가 공존하는 문화 도시",
          imageUrl: "https://images.unsplash.com/photo-1639057063671-b42f8d9cf11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGt5b3RvfGVufDF8fHx8MTc2Mzg2MTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["문화", "역사", "음식"]
        },
        {
          name: "노르웨이",
          country: "노르웨이",
          description: "피오르드 트레킹과 북유럽 감성",
          imageUrl: "https://images.unsplash.com/photo-1505312917212-9db5bde78aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J3YXklMjBmam9yZHxlbnwxfHx8fDE3NjM4NjY3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["자연", "트레킹", "피오르드"]
        },
        {
          name: "페루",
          country: "페루",
          description: "마추픽추와 잉카 문명 탐험",
          imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["역사", "트레킹", "문화"]
        },
        {
          name: "베트남",
          country: "베트남",
          description: "가성비 좋은 동남아 배낭여행",
          imageUrl: "https://images.unsplash.com/photo-1672841828459-bc913fdcd995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZHxlbnwxfHx8fDE3NjM3OTI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["배낭여행", "음식", "가성비"]
        }
      ]
    },
    {
      id: "thirties",
      label: "30대",
      age: "30-39세",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      destinations: [
        {
          name: "산토리니",
          country: "그리스",
          description: "에게해의 낭만과 휴식, 와인 투어",
          imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjM4NTA5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["휴양", "낭만", "와인"]
        },
        {
          name: "토스카나",
          country: "이탈리아",
          description: "와이너리 투어와 시골의 여유",
          imageUrl: "https://images.unsplash.com/photo-1703113690550-b1c65a730cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMHZpbmV5YXJkfGVufDF8fHx8MTc2Mzg2MTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["와인", "미식", "휴식"]
        },
        {
          name: "방콕",
          country: "태국",
          description: "스파와 마사지, 도심 속 힐링",
          imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["스파", "문화", "음식"]
        },
        {
          name: "프랑스 남부",
          country: "프랑스",
          description: "프로방스의 라벤더와 여유로운 휴가",
          imageUrl: "https://images.unsplash.com/photo-1703113690550-b1c65a730cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMHZpbmV5YXJkfGVufDF8fHx8MTc2Mzg2MTE3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["휴양", "자연", "와인"]
        },
        {
          name: "몰타",
          country: "몰타",
          description: "지중해의 숨은 보석, 역사와 해변",
          imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjM4NTA5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["역사", "해변", "힐링"]
        },
        {
          name: "발리",
          country: "인도네시아",
          description: "럭셔리 리조트와 스파, 요가 휴양",
          imageUrl: "https://images.unsplash.com/photo-1672841828459-bc913fdcd995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZHxlbnwxfHx8fDE3NjM3OTI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["요가", "스파", "휴양"]
        }
      ]
    },
    {
      id: "forties",
      label: "40대",
      age: "40-49세",
      icon: <Heart className="w-6 h-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      destinations: [
        {
          name: "뉴질랜드",
          country: "뉴질랜드",
          description: "자연과 함께하는 로드 트립",
          imageUrl: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NjM4NDM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["자연", "로드트립", "평화"]
        },
        {
          name: "프라하",
          country: "체코",
          description: "중세 유럽의 아름다움과 역사",
          imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["역사", "건축", "문화"]
        },
        {
          name: "캐나다",
          country: "캐나다",
          description: "로키산맥과 대자연의 웅장함",
          imageUrl: "https://images.unsplash.com/photo-1578592391689-0e3d1a1b52b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZ3xlbnwxfHx8fDE3NjM4NDQ2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["자연", "산", "평화"]
        },
        {
          name: "아이슬란드",
          country: "아이슬란드",
          description: "블루라군 온천과 빙하 투어",
          imageUrl: "https://images.unsplash.com/photo-1660295295985-005be316dba1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2VsYW5kJTIwbmF0dXJlfGVufDF8fHx8MTc2Mzg2NjczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.9,
          tags: ["온천", "자연", "힐링"]
        },
        {
          name: "오스트리아",
          country: "오스트리아",
          description: "클래식 음악과 알프스 풍경",
          imageUrl: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NjM4NDM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["문화", "음악", "자연"]
        },
        {
          name: "스코틀랜드",
          country: "영국",
          description: "고성과 위스키 투어",
          imageUrl: "https://images.unsplash.com/photo-1505312917212-9db5bde78aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3J3YXklMjBmam9yZHxlbnwxfHx8fDE3NjM4NjY3MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["역사", "위스키", "자연"]
        }
      ]
    },
    {
      id: "fifties",
      label: "50대 이상",
      age: "50세+",
      icon: <HomeIcon className="w-6 h-6" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      destinations: [
        {
          name: "부탄",
          country: "부탄",
          description: "히말라야의 평화로운 불교 왕국",
          imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["문화", "평화", "명상"]
        },
        {
          name: "포르투갈",
          country: "포르투갈",
          description: "여유로운 해안 마을과 전통 음식",
          imageUrl: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZXxlbnwxfHx8fDE3NjM4NDM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["휴양", "음식", "문화"]
        },
        {
          name: "제주도",
          country: "대한민국",
          description: "가까운 국내 여행지, 자연과 힐링",
          imageUrl: "https://images.unsplash.com/photo-1672841828459-bc913fdcd995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZHxlbnwxfHx8fDE3NjM3OTI4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["자연", "힐링", "편안함"]
        },
        {
          name: "크로아티아",
          country: "크로아티아",
          description: "아드리아해의 아름다운 해안 도시",
          imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydHxlbnwxfHx8fDE3NjM4NTA5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.7,
          tags: ["해변", "역사", "평화"]
        },
        {
          name: "교토",
          country: "일본",
          description: "전통 사찰과 정원의 고즈넉한 매력",
          imageUrl: "https://images.unsplash.com/photo-1639057063671-b42f8d9cf11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGt5b3RvfGVufDF8fHx8MTc2Mzg2MTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.8,
          tags: ["문화", "명상", "전통"]
        },
        {
          name: "독일",
          country: "독일",
          description: "온천 마을과 고성 투어",
          imageUrl: "https://images.unsplash.com/photo-1699359104603-14a5607966bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZXxlbnwxfHx8fDE3NjM4NjExNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          rating: 4.6,
          tags: ["온천", "역사", "편안함"]
        }
      ]
    }
  ];

  const [selectedAge, setSelectedAge] = useState<string>("twenties");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showMore, setShowMore] = useState<boolean>(false);

  const currentGroup = ageGroups.find(group => group.id === selectedAge);
  const displayedDestinations = showMore ? currentGroup?.destinations : currentGroup?.destinations.slice(0, 3);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-gray-900 mb-2">✈️ 나이별 맞춤 여행지 추천</h1>
            <p className="text-gray-600">당신의 나이대에 딱 맞는 완벽한 여행지를 찾아보세요</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Age Selection */}
        <div className="mb-12">
          <h2 className="text-gray-800 mb-6 text-center">연령대를 선택하세요</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {ageGroups.map((group) => (
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
                    <div className={selectedAge === group.id ? '' : 'text-gray-700'}>
                      {group.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{group.age}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Destinations */}
        {currentGroup && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-gray-900 mb-2">
                {currentGroup.label} 추천 여행지
              </h2>
              <p className="text-gray-600">
                {currentGroup.label}에게 가장 인기있는 여행지를 선별했습니다
              </p>
            </div>

           {/* 캐러셀 컨테이너 */}
              <div className="relative">
                {/* 왼쪽 화살표 버튼 */}
                <button
                  onClick={scrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -ml-5"
                  aria-label="이전"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* 스크롤 컨테이너 */}
                <div 
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {currentGroup.destinations.map((destination, index) => (
                    <div key={index} className="flex-shrink-0 w-[350px]">
                      <DestinationCard {...destination} />
                    </div>
                  ))}
                </div>

                {/* 오른쪽 화살표 버튼 */}
                <button
                  onClick={scrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors -mr-5"
                  aria-label="다음"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
        )}
      </main>

      {/* Monthly Destinations Section */}
      <section className="bg-gray-50 py-8">
        <MonthlyDestinations />
      </section>

        
      {/* Unique Destinations Section */}
      <section className="bg-white py-8">
        <UniqueDestinations />
      </section>

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
