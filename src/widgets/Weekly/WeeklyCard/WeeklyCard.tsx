import {Button} from "@/components/Button/Button.tsx";

import {IWeeklyCard} from "@/widgets/Weekly/WeeklyCard/types.ts";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import WeeklyEthereum from "@/assets/icons/WeeklyEthereum.svg"

import styles from './styles.module.scss'
import {useEffect, useState} from "react";

export const WeeklyCard = ({ title, price, imageUrl }: IWeeklyCard) => {
    const generateRandomTime = () => {
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        const seconds = Math.floor(Math.random() * 60);
        return `${hours}:${minutes}:${seconds}`;
    };

    const parseTimeToSeconds = (timeString: string) => {
        const [hours, minutes, seconds] = timeString.split(':').map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    };

    const formatSecondsToTime = (totalSeconds: number) => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    };

    const [remainingSeconds, setRemainingSeconds] = useState(parseTimeToSeconds(generateRandomTime()));

    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingSeconds((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.weeklyCard}>
            <img className={styles.image} draggable={false} src={imageUrl} alt="weeklyImage"/>
            <div className={styles.timer}>
                <p className={styles.time}>
                    {formatSecondsToTime(remainingSeconds)}
                </p>
            </div>
            <p className={styles.title}>
                {title}
            </p>
            <div className={styles.info}>
                <div className={styles.price}>
                    <p className={styles.priceText}>Current bid</p>
                    <div className={styles.priceInfo}>
                        <WeeklyEthereum/>
                        <p className={styles.priceNumber}>{price}</p>
                    </div>
                </div>
                <Button className={styles.priceButton} theme={ButtonThemes.DARK} size={ButtonSizes.SMALL}>
                    PLACE BID
                </Button>
            </div>
        </div>
    );
};