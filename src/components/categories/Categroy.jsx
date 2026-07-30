import styles from '../../styles/categories.module.scss'
import { CATEGORIES } from "../../data/Categories";


function Categroy() {
    return (
        <div className={styles.categories}>
            {CATEGORIES.map((category, index) => (
                <div className={styles.oneCategory}>
                    <div className={styles.icon}>
                        <img src={category.imageUrl} />
                    </div>
                    <div className={styles.title}>
                        {category.name}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Categroy;