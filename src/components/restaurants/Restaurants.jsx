import styles from '../../styles/restaurants.module.scss'

function Restaurants({ restaurants }) {
    return (
        <div className={styles.restaurants}>
            <div className={styles.title}>
                Nearby restaurants
            </div>
            <div className={styles.list}>
                {restaurants.map((restaurant, index) =>
                    <div className={styles.listItem} key={index}>
                        <div className={styles.image}>
                            <img src={restaurant.imageUrl} />
                            {restaurant.isFeatures && <div className={styles.featured}>
                                FEATURED
                            </div>}
                        </div>
                        <div className={styles.itemContent}>
                            <div className={styles.listTitle}>
                                <span className={styles.listTitleLabel}>
                                    {restaurant.title}
                                </span>
                                <div className={`${styles.cartIcon} ${restaurant.cartItems > 0 ? styles.active : ''}`}>
                                    <img src="src/assets/shopping-bag.svg" />
                                    {restaurant.cartItems > 0 &&
                                        <span className={styles.cartIcon}>
                                            {restaurant.cartItems}
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className={styles.listTime}>
                                <div className={styles.label}>
                                    <div className={styles.itemClock}>
                                        <img src="../../../public/clock.svg" />
                                    </div>
                                    <span>
                                        {restaurant.prepareTime}
                                    </span>
                                </div>
                                <div className={styles.time}></div>
                                <div className={styles.label}>
                                    <span>
                                        {restaurant.priceSum}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.listCategories}>
                                {restaurant.categories.map((category, index) => {
                                    return <div key={index} className={styles.listCategory}>
                                        <span className={styles.listCategoryIcon}>
                                            <img src={category.imageUrl} />
                                        </span>
                                        <span className={styles.listCategoryLabel}>{category.name}</span>
                                    </div>
                                })}
                            </div>
                        </div>


                    </div>

                )}
            </div>
            {restaurants.length === 0 &&
                <div className={styles.noRestaurants}>No restaurants found!</div>}
        </div>

    )
}
export default Restaurants;