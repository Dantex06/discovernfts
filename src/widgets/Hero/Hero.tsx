import styles from './styles.module.scss'
import {Button} from "@/components/Button/Button.tsx";
import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1 className={styles.title}>Discover And Create NFTs</h1>
            <p className={styles.description}>
                Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a <span className={styles.highlight}>$20 bonus.</span>
            </p>
            <div className={styles.buttonGroup}>
                <Button theme={ButtonThemes.DARK} size={ButtonSizes.DEFAULT}>
                    EXPLORE MORE
                </Button>
                <Button theme={ButtonThemes.LIGHT_BORDER} size={ButtonSizes.SMALL}>
                    CREATE NFT
                </Button>
            </div>
        </div>
    );
};

