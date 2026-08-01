import "./styles/global.scss";
import Navbar from './components/navbar/Navbar'
import Categroy from './components/categories/Categroy'
import Offers from './components/offers/Offers'
import Restaurants from './components/restaurants/Restaurants'
import { CATEGORIES } from "./data/Categories";
import { RESTAURANTS } from "./data/Restaurants";
import { filterRestaurants, getActiveCategoryNames } from "./utility/RestaurantFilters";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState(CATEGORIES);

  function toggleCategory(index) {
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === index ? { ...cat, active: !cat.active } : cat
      )
    );
  }

  const filteredRestaurants = filterRestaurants(
    RESTAURANTS,
    getActiveCategoryNames(categories)
  );
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Offers />

          <Categroy
            categories={categories}
            toggleCategory={toggleCategory}
          />

          <Restaurants restaurants={filteredRestaurants} />
        </div >
      </div>
    </>
  );
}

export default App;
