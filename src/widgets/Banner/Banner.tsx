import styles from './styles.module.scss'
import { Button } from '@/components/Button/Button.tsx'
import { ButtonSizes, ButtonThemes } from '@/components/Button/types.ts'
import BannerImage from "@/assets/images/hero/HeroImage1.jpg"


export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.block}>
                <div className={styles.info}>
                    <h3 className={styles.title}>CREATE AND SELL NFTs</h3>
                    <p className={styles.description}>World’s Largest NFT Place</p>
                    <div className={styles.buttons}>
                        <Button className={styles.button} theme={ButtonThemes.LIGHT} size={ButtonSizes.SMALL}>
                            <p className={styles.buttonText}>Explore More</p>
                        </Button>
                        <Button className={styles.button} theme={ButtonThemes.DARK_BORDER} size={ButtonSizes.SMALL}>
                            <p className={styles.buttonText}>Sell Artwork</p>
                        </Button>
                    </div>
                </div>
                <div className={styles.imageBlock}>
                    <img className={styles.image} src={BannerImage} alt="banner" />

                </div>
            </div>
        </div>
    )
}

export default Banner