import React from 'react';

function FilterMovieYear({year, updateSelect, SelectedYears}) {
  const handleChange = (ev) => {
    updateSelect(ev.target.value);
  };
  const renderYear = () => {
    return SelectedYears.map((eachYear, index) => (
      <option key={index} value={eachYear}>
        {eachYear}
      </option>
    ));
  };
  return (
    <>
      <label htmlFor="year">
        Year
        <select name="year" id="year" value={year} onChange={handleChange}>
          <option value="">All</option>
          {renderYear()}
        </select>
      </label>
    </>
  );
}

export default FilterMovieYear;
