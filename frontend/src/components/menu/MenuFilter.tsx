"use client";

import React, { useState, useMemo } from "react";
import { Search, Flame, Leaf, Award, X, Sparkles, Filter } from "lucide-react";
import { MenuItem } from "@/types";
import { menuCategories, menuItems } from "@/data/menu-data";

export const MenuFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Chef's Signature");
  const [searchQuery, setSearchQuery] = useState("");
  const [jainOnly, setJainOnly] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);
  const [maxSpice, setMaxSpice] = useState<number>(5);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category check (or all)
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      // Search check
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.hindiName && item.hindiName.includes(searchQuery));

      // Jain filter
      const matchesJain = jainOnly ? item.isJainAvailable === true : true;

      // Veg filter
      const matchesVeg = vegOnly ? item.isVeg === true : true;

      // Spice level filter
      const matchesSpice = item.spiceLevel <= maxSpice;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesJain &&
        matchesVeg &&
        matchesSpice
      );
    });
  }, [selectedCategory, searchQuery, jainOnly, vegOnly, maxSpice]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="bg-[#1A1818] border border-[#D4AF37]/30 rounded-2xl p-4 md:p-6 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Butter Chicken, Dal Makhani, Biryani)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#D4AF37]/30 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-[#FFFDF6] placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Quick Filter Toggles */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => setJainOnly(!jainOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                jainOnly
                  ? "bg-[#097969] text-white border-[#097969]"
                  : "bg-[#121212] text-gray-300 border-[#D4AF37]/30 hover:border-[#097969]"
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              Pure Jain
            </button>

            <button
              onClick={() => setVegOnly(!vegOnly)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                vegOnly
                  ? "bg-[#097969] text-white border-[#097969]"
                  : "bg-[#121212] text-gray-300 border-[#D4AF37]/30 hover:border-[#097969]"
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              Pure Veg
            </button>

            {/* Spice filter dropdown */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121212] border border-[#D4AF37]/30 rounded-xl text-xs text-[#D4AF37]">
              <Flame className="w-3.5 h-3.5 text-[#FF9933]" />
              <span>Spice ≤ {maxSpice}</span>
              <input
                type="range"
                min="1"
                max="5"
                value={maxSpice}
                onChange={(e) => setMaxSpice(Number(e.target.value))}
                className="w-16 accent-[#FF9933] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs Carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-t border-[#D4AF37]/20 pt-4">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-royal uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
              selectedCategory === "All"
                ? "bg-[#D4AF37] text-[#2D080E] shadow-md"
                : "bg-[#221F1F] text-[#F3E5AB] hover:bg-[#4A0E17]"
            }`}
          >
            All Items ({menuItems.length})
          </button>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-royal uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#D4AF37] text-[#2D080E] shadow-md"
                  : "bg-[#221F1F] text-[#F3E5AB] hover:bg-[#4A0E17]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Dish Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((dish) => (
          <div
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="royal-card-dark rounded-2xl overflow-hidden cursor-pointer flex flex-col group"
          >
            <div className="relative h-48 w-full overflow-hidden bg-[#2D080E]">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                {dish.isVeg ? (
                  <span className="bg-emerald-800/90 text-emerald-100 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    VEG
                  </span>
                ) : (
                  <span className="bg-red-900/90 text-red-100 text-[10px] font-bold px-2 py-0.5 rounded border border-red-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    NON-VEG
                  </span>
                )}
                {dish.isJainAvailable && (
                  <span className="bg-teal-900/90 text-teal-100 text-[10px] font-bold px-2 py-0.5 rounded border border-teal-400">
                    JAIN
                  </span>
                )}
              </div>

              {dish.isChefSpecial && (
                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#2D080E] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  CHEF SPECIAL
                </span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-royal text-base font-bold text-[#F3E5AB] group-hover:text-[#D4AF37] transition-colors">
                    {dish.name}
                  </h3>
                  <span className="font-royal text-base font-bold text-[#D4AF37]">
                    ₹{dish.price}
                  </span>
                </div>
                {dish.hindiName && (
                  <p className="text-xs text-[#D4AF37]/80 font-serif mt-0.5">
                    {dish.hindiName}
                  </p>
                )}
                <p className="text-xs text-gray-300 mt-2 line-clamp-2 leading-relaxed font-sans">
                  {dish.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#FF9933]" />
                  <span>Spice Level:</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-3 rounded-sm ${
                          i < dish.spiceLevel
                            ? "bg-[#FF9933]"
                            : "bg-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <span className="text-[11px] text-[#D4AF37] underline font-semibold group-hover:text-white transition-colors">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-[#1A1818] border border-[#D4AF37]/30 rounded-2xl p-8">
          <p className="font-royal text-lg text-[#F3E5AB]">No dishes match your selected filters.</p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
              setJainOnly(false);
              setVegOnly(false);
              setMaxSpice(5);
            }}
            className="mt-4 px-6 py-2 bg-[#D4AF37] text-[#2D080E] font-bold text-xs rounded-full uppercase tracking-wider"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#1A1818] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#4A0E17]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 w-full">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1818] via-transparent to-transparent" />
            </div>

            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-royal text-xl font-bold text-[#F3E5AB]">
                    {selectedDish.name}
                  </h3>
                  <span className="font-royal text-xl font-bold text-[#D4AF37]">
                    ₹{selectedDish.price}
                  </span>
                </div>
                {selectedDish.hindiName && (
                  <p className="text-sm text-[#D4AF37] font-serif">
                    {selectedDish.hindiName}
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-200 leading-relaxed font-sans">
                {selectedDish.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold text-[#D4AF37] tracking-wider mb-2">
                  Key Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDish.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-[#2D080E] border border-[#D4AF37]/30 text-gray-200 text-[11px] rounded-lg"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#D4AF37]/20 text-xs text-gray-300">
                <span>Calories: {selectedDish.calories || "N/A"}</span>
                <span>Category: {selectedDish.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
