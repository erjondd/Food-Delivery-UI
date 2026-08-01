import styles from '../../styles/navbar.module.scss'
import Logo from '../../assets/logo.png'
import SearchIcon from '../../assets/search.svg'
import { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <div className={styles.logoWrapper}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className={styles.search}>
                            <input type="text" placeholder="Search" />
                            <img src={SearchIcon} className={styles.searchIcon} />


                        </div>
                    </div>
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={menuOpen ? styles.open : ""}></span>
                        <span className={menuOpen ? styles.open : ""}></span>
                        <span className={menuOpen ? styles.open : ""}></span>
                    </button>
                    <div className={`${styles.menuWrapper} ${menuOpen ? styles.menuOpen : ""}`}>
                        <div className={styles.menu}>
                            <ul>
                                <li onClick={() => setMenuOpen(false)}>Restaurants</li>
                                <li onClick={() => setMenuOpen(false)}>Deals</li>
                                <li onClick={() => setMenuOpen(false)}>
                                    <span>My orders</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.nothing}></div>
            </div>
        </div>
    );
}
export default Navbar;