import {INavigator} from "@/components/Navigator/types.ts";

import LeftArrow from "@/assets/icons/LeftArrow.svg"
import RightArrow from "@/assets/icons/RightArrow.svg"

import styles from './styles.module.scss'

export const Navigator = ({ listRef }: INavigator) => {
    const scroll = (direction: string) => {
        if (listRef.current) {
            if (direction === 'left') {
                listRef.current.swiper.slidePrev();
            } else {
                listRef.current.swiper.slideNext();
            }
        }
    };

    return (
        <div className={styles.navigator}>
            <div className={styles.items}>
                <div className={styles.leftArrow} onClick={() => scroll('left')}>
                    <LeftArrow />
                </div>
                <div className={styles.line}></div>
                <div className={styles.rightArrow} onClick={() => scroll('right')}>
                    <RightArrow />
                </div>
            </div>
        </div>
    );
};

