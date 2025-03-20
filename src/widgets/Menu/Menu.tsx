import Instagram from '@/assets/icons/Instagram.svg'
import Linkedin from '@/assets/icons/Linkedin.svg'
import Facebook from '@/assets/icons/Facebook.svg'
import Twitter from '@/assets/icons/Twitter.svg'

import styles from './styles.module.scss'
import {Button} from "@/components/Button/Button.tsx";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

export const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles.menuInfo}>
            <div className={styles.line}></div>
            <div className={styles.titles}>
            <h2 className={styles.title}>DISCOVER</h2>
            <h2 className={styles.title}>CREATORS</h2>
            <h2 className={styles.title}>SELL</h2>
            <h2 className={styles.title}>STATS</h2>
            </div>
            <div className={styles.icons}>
                <Instagram/>
                <Linkedin/>
                <Facebook/>
                <Twitter/>
            </div>
            </div>
            <Button className={styles.menuButton} theme={ButtonThemes.DARK} size={ButtonSizes.DEFAULT}>CONNECT WALLET</Button>
        </div>
    );
};