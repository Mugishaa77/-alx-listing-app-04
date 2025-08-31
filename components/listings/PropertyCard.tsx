import React from "react";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
        <p className="text-gray-500 text-sm">
          {property.address.city}, {property.address.country}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-500 font-bold text-xl">
            ${property.price}
          </span>
          <span className="text-yellow-500 text-sm">⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
