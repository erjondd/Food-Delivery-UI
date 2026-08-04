import styles from '../../styles/offers.module.scss'
import Burger from '../../../public/offert-burger.png'

function Offers() {
    return (
        <div className={styles.offers}>
            <div className={styles.desserts}>
                <div className={styles.image}>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.title}>
                        All deserts
                    </div>
                    <div className={styles.offer}>
                        20% OFF
                    </div>
                    <div className={styles.bottom}>
                        Deserty
                    </div>
                </div>
            </div>
            <div className={styles.burger}>
                <div className={styles.image}>
                    <img src={Burger} />
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.title}>
                        Big Burgers
                    </div>
                    <div className={styles.burgerOffer}>
                        50% OFF
                    </div>
                    <div className={styles.bottom}>
                        Fooddies
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Offers;