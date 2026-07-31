import styles from '../../styles/categories.module.scss'
import { CATEGORIES } from "../../data/Categories";


function Categroy() {
    return (
        <div className={styles.categories}>
            <ul>
                {CATEGORIES.map((category, index) => (
                    <li key={index} onClick={() => index.filter({ ...category, active: !category.active })} className={`${category.active ? styles.active : ''} ${styles.oneCategory}`}>
                        <div className={styles.icon}>
                            <img src={category.imageUrl} />
                        </div>
                        <div className={styles.title}>
                            {category.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categroy;