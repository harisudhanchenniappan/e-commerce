import React from 'react';

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <label>Min Price</label>
        <input
          type="number"
          name="minPrice"
          className="form-control"
          value={filters.minPrice}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-4">
        <label>Max Price</label>
        <input
          type="number"
          name="maxPrice"
          className="form-control"
          value={filters.maxPrice}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-4">
        <label>Min Rating</label>
        <input
          type="number"
          name="minRating"
          step="0.1"
          className="form-control"
          value={filters.minRating}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Filters;
