import {Button} from "@/components/Button/Button.tsx";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import Logo from '@/assets/icons/Logo.svg'
import Menu from '@/assets/icons/Menu.svg'
import CloseMenu from '@/assets/icons/CloseMenu.svg'

import styles from './styles.module.scss'
import {useEffect, useRef} from "react";
import {IHeader} from "@/widgets/Header/types.ts";
import clsx from "clsx";

export const Header = ({menu, setMenu}: IHeader) => {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            const targetElement = document.getElementById('hero');

            if (header && targetElement) {
                const targetOffset = targetElement.offsetTop;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= targetOffset - 120) {
                    header.classList.add(styles.sticky);
                } else {
                    header.classList.remove(styles.sticky);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={headerRef} className={clsx(styles.header, menu ? styles.headerMobile : "")}>
            <div className={styles.leftSide}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.navigations}>
                    <p className={styles.navItem}>DISCOVER</p>
                    <p className={styles.navItem}>CREATORS</p>
                    <p className={styles.navItem}>SELL</p>
                    <p className={styles.navItem}>STATS</p>
                </div>
                <p className={styles.logoTitle}>
                    Dive Sea
                </p>
            </div>
            <Button className={styles.button} theme={ButtonThemes.DARK} size={ButtonSizes.BIG}>
                CONNECT WALLET
            </Button>
            <button className={styles.menu} onClick={() => setMenu(!menu)}>{menu ? <CloseMenu/> : <Menu/>}</button>
        </div>
    );
};