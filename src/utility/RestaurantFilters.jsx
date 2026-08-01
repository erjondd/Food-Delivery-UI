export const filterRestaurants = (restaurants, categories, input) => {
    const _restaurants = [];
    restaurants.forEach((restaurant) => {
        const _matchCategories = restaurant.categories.filter((c) => categories.includes(c.name));
        if (_matchCategories.length > 0) {
            const _catsNames = restaurant.categories.map((c) => c.name);
            if (input) {
                if (restaurant.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 || _catsNames.includes(input.toLowerCase())) {
                    _restaurants.push(restaurant)
                }
            } else {
                _restaurants.push(restaurant)
            }
        }
    })
    return _restaurants
}

export const getActiveCategoryNames = (categories) => {
    return categories.filter((f) => f.active).map((category) => category.name);
}