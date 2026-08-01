import styles from '../../styles/navbar.module.scss'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.svg'

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

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;