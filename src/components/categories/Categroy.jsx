import styles from "../../styles/categories.module.scss";

function Categroy({ categories, toggleCategory }) {
    return (
        <div className={styles.categories}>
            <ul>
                {categories.map((category, index) => (
                    <li
                        key={index}
                        onClick={() => toggleCategory(index)}
                        className={`${styles.oneCategory} ${category.active ? styles.active : ""
                            }`}
                    >
                        <div className={styles.icon}>
                            <img src={category.imageUrl} alt={category.name} />
                        </div>

                        <div className={styles.title}>
                            {category.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Categroy;