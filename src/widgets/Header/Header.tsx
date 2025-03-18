import {Button} from "@/components/Button/Button.tsx";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import Logo from '@/assets/icons/Logo.svg'

import styles from './styles.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftSide}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.navigations}>
                <p className={styles.navItem}>DISCOVER</p>
                <p className={styles.navItem}>CREATORS</p>
                <p className={styles.navItem}>SELL</p>
                <p className={styles.navItem}>STATS</p>
            </div>
            </div>
            <Button theme={ButtonThemes.DARK} size={ButtonSizes.BIG}>
                CONNECT WALLET
            </Button>
        </div>
    );
};