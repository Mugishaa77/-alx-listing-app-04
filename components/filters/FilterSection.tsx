import React, { useState } from "react";
import Pill from "@/components/common/Pill";
import { FILTERS } from "@/constants";

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-3">
        {FILTERS.map((filter) => (
          <Pill
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
