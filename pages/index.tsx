
import React from "react";
import { HERO_BACKGROUND } from "@/constants";
import FilterSection from "@/components/filters/FilterSection";
import PropertyCard from "@/components/listings/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import './input.css';
import './styles/globals.css'


const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

       {/* Filters */}
      <FilterSection />

       {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
