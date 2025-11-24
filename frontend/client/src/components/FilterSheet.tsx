import { X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterValues) => void;
  currentFilters: FilterValues;
}

export interface FilterValues {
  regions: string[];
  activities: string[];
  priceRange: string[];
  ratings: number[];
}

const regions = ['국내', '아시아', '유럽', '미주', '오세아니아', '아프리카'];
const activities = ['등산', '자연', '모험', '문화', '휴양', '도시', '캠핑', '사파리'];
const priceRanges = ['10만원 이하', '10-30만원', '30-50만원', '50-100만원', '100만원 이상'];
const ratingOptions = [5, 4, 3, 2, 1];

export function FilterSheet({ isOpen, onClose, onApplyFilters, currentFilters }: FilterSheetProps) {
  const [filters, setFilters] = useState<FilterValues>(currentFilters);

  const toggleFilter = (category: keyof FilterValues, value: string | number) => {
    setFilters(prev => {
      const currentArray = prev[category] as any[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [category]: newArray };
    });
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      regions: [],
      activities: [],
      priceRange: [],
      ratings: []
    };
    setFilters(resetFilters);
  };

  return (
    <>
      {/* Overlay (배경 어두워지는 부분) */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[90] ${ // 👈 z-40을 z-[90]으로 변경
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Side Sheet (흰색 필터 창) */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-[100] transform transition-transform duration-300 ease-in-out ${ // 👈 z-50을 z-[100]으로 변경
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-blue-600" />
              <h2>필터</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* 지역 */}
            <div className="mb-8">
              <h3 className="mb-3">지역</h3>
              <div className="flex flex-wrap gap-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => toggleFilter('regions', region)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      filters.regions.includes(region)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            {/* 활동 */}
            <div className="mb-8">
              <h3 className="mb-3">활동</h3>
              <div className="flex flex-wrap gap-2">
                {activities.map(activity => (
                  <button
                    key={activity}
                    onClick={() => toggleFilter('activities', activity)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      filters.activities.includes(activity)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </div>

            {/* 가격대 */}
            <div className="mb-8">
              <h3 className="mb-3">가격대</h3>
              <div className="flex flex-col gap-2">
                {priceRanges.map(price => (
                  <label
                    key={price}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.priceRange.includes(price)}
                      onChange={() => toggleFilter('priceRange', price)}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>{price}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* 평점 */}
            <div className="mb-8">
              <h3 className="mb-3">평점</h3>
              <div className="flex flex-col gap-2">
                {ratingOptions.map(rating => (
                  <label
                    key={rating}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={filters.ratings.includes(rating)}
                      onChange={() => toggleFilter('ratings', rating)}
                      className="w-5 h-5 accent-blue-600"
                    />
                    <span>{'⭐'.repeat(rating)} 이상</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6 flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              초기화
            </button>
            <button
              onClick={handleApply}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              적용하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
