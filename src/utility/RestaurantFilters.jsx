export const filterRestaurants = (
    restaurants,
    categories,
    search = ""
) => {
    return restaurants.filter((restaurant) => {
        // Category filter
        const categoryMatch =
            categories.length === 0 ||
            restaurant.categories.some((c) => categories.includes(c.name));

        // Search filter
        const searchMatch = restaurant.title
            .toLowerCase()
            .includes(search.toLowerCase());

        return categoryMatch && searchMatch;
    });
};

export const getActiveCategoryNames = (categories) => {
    return categories
        .filter((category) => category.active)
        .map((category) => category.name);
};