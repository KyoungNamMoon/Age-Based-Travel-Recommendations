import { useState } from "react";
import { Search, Plane, MapPin, Minus, Plus, Hotel, Car } from "lucide-react";

type TabType = "hotel" | "flight" | "car";

export function SearchTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("hotel");
  const [travelers, setTravelers] = useState(1);

  const tabs = [
    { id: "hotel" as TabType, label: "Hotel", icon: <Hotel className="w-5 h-5" /> },
    { id: "flight" as TabType, label: "Flight", icon: <Plane className="w-5 h-5" /> },
    { id: "car" as TabType, label: "Car Rental", icon: <Car className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex-1 px-6 py-4 transition-colors flex items-center justify-center gap-2
              ${activeTab === tab.id
                ? "bg-white text-blue-600 border-b-2 border-blue-600"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            <div className="flex items-center gap-1">
              {tab.icon}
            </div>
            <span className="text-sm">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Search Form */}
      <div className="p-8">
        {activeTab === "flight" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Departure */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Departure</label>
                <div className="relative">
                  <Plane className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Departure airport"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Arrival airport/city"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Departure Date */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Departure Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Return Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Travelers */}
            <div className="mb-6">
              <label className="block text-sm text-gray-600 mb-2">Travelers</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg min-w-[40px] text-center">{travelers}</span>
                <button
                  onClick={() => setTravelers(travelers + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "hotel" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Destination */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City/Hotel name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Check-in</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Check-out */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Check-out</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Guests</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg min-w-[40px] text-center">{travelers}</span>
                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "car" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Pick-up Location */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Pick-up Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="City/Airport"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Pick-up Date */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Pick-up Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Drop-off Date */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Drop-off Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">Drop-off Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Same as pick-up"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Promotion Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs">💡</span>
          </div>
          <p className="text-sm text-blue-800">
            Save up to <span className="font-semibold">30% off</span> when you book a package!
          </p>
        </div>

        {/* Search Button */}
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Search className="w-5 h-5" />
          <span>
            {activeTab === "flight" && "Search Flights"}
            {activeTab === "hotel" && "Search Hotels"}
            {activeTab === "car" && "Search Car Rentals"}
          </span>
        </button>
      </div>
    </div>
  );
}