export const filterRestaurants = (restaurants, categories) => {
    if (categories.length === 0) {
        return restaurants;
    }

    const _restaurants = [];


    restaurants.forEach((restaurant) => {
        const _matchCategories = restaurant.categories.filter((c) => categories.includes(c.name));
        if (_matchCategories.length > 0) {
            return _restaurants.push(restaurant);
        }
    })
    return _restaurants
}

export const getActiveCategoryNames = (categories) => {
    return categories.filter((f) => f.active).map((category) => category.name);
}