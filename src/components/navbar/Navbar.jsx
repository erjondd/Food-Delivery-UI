import styles from '../../styles/navbar.module.scss'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.svg'
// import Profile from '../../assets/profile.png'
// import ShoppingImg from '../../assets/shopping-bag.svg'
function Navbar() {
    return (
        <>
            <div className={styles.header} >
                <div className={styles.container}>
                    <div className={styles.headerWrapper}>
                        <div className={styles.logoWrapper}>

                            <div className={styles.logo}>
                                <img src={Logo} />
                            </div>
                            <div className={styles.search}>
                                <input type="text" placeholder="Search" />
                                <img src={SearchIcon} className={styles.searchIcon} />
                            </div>
                        </div>

                        <div className={styles.menuWrapper}>
                            <div className={styles.menu}>
                                <ul>
                                    <li>
                                        Restaurants
                                    </li>
                                    <li>
                                        Deals
                                    </li>
                                    <li>
                                        <span>
                                            My orders
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className={styles.shopping}>
                                <div className={styles.shoppingCart}>
                                    <img src={ShoppingImg} />
                                    <span className={styles.shoppingNumber}>
                                        4
                                    </span>
                                </div>
                                <div className={styles.avatar}>
                                    <img src={Profile} className={styles.avatarImage} />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;