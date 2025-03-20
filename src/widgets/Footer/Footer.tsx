import Icon from "@/assets/icons/FooterIcon.svg"
import Instagram from "@/assets/icons/Instagram.svg"
import Linkedin from "@/assets/icons/Linkedin.svg"
import Facebook from "@/assets/icons/Facebook.svg"
import Twitter from "@/assets/icons/Twitter.svg"

import styles from './styles.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.unit}>
                <div className={styles.logo}>
                    <Icon/>
                    <p className={styles.title}>DiveSea</p>
                </div>
                <div className={styles.navigation}>
                    <p className={styles.navigateText}>Privacy Policy</p>
                    <p className={styles.navigateText}>Term & Conditions</p>
                    <p className={styles.navigateText}>About Us</p>
                    <p className={styles.navigateText}>Contact</p>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.lower}>
                <p className={styles.lowerInfo}>© 2023 EATLY All Rights Reserved.</p>
                <div className={styles.icons}>
                    <Instagram/>
                    <Linkedin/>
                    <Facebook/>
                    <Twitter/>
                </div>
            </div>
        </div>
    )
}

export default Footer