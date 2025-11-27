import { SearchTabs } from "./SearchTabs";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-12 min-h-[400px] flex items-center">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-8">
          <h2 className="mb-3">Travel Anywhere, at the Best Price</h2>
          <p className="text-blue-100">
            Book flights, hotels, and car rentals all in one place
          </p>
        </div>
        
        <SearchTabs />
      </div>
    </section>
  );
}
