import {Button} from "@/components/Button/Button.tsx";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import Logo from '@/assets/icons/Logo.svg'

import styles from './styles.module.scss'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftSide}>
            <div className={styles.logo}>
                <Logo/>
            </div>
            <div className={styles.navigations}>
                <p>DISCOVER</p>
                <p>CREATORS</p>
                <p>SELL</p>
                <p>STATS</p>
            </div>
            </div>
            <Button theme={ButtonThemes.DARK} size={ButtonSizes.BIG}>
                CONNECT WALLET
            </Button>
        </div>
    );
};

export default Header;