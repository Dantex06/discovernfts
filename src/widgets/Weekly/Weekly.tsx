import styles from './styles.module.scss'
import {WeeklyCardList} from "@/widgets/Weekly/WeeklyCardList/WeeklyCardList.tsx";

export const Weekly = () => {
    return (
        <div className={styles.weekly}>
            <h2 className={styles.title}>Weekly - Top NFT</h2>
            <WeeklyCardList/>
        </div>
    )
}