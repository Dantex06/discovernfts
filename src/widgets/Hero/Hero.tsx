import {Button} from "@/components/Button/Button.tsx";

import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import HeroArrow from "@/assets/icons/HeroArrow.svg"
import HeroBackground from "@/assets/icons/HeroBackground.svg"
import HeroImage1 from "@/assets/images/HeroImage1.jpg"
import HeroImage2 from "@/assets/images/HeroImage2.jpg"

import styles from './styles.module.scss'

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContainer}>

                <div className={styles.heroText}>
                    <h1 className={styles.title}>Discover And Create NFTs</h1>
                    <p className={styles.description}>
                        Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get
                        a <span
                        className={styles.highlight}>$20 bonus.</span>
                    </p>
                    <div className={styles.buttonGroup}>
                        <Button theme={ButtonThemes.DARK} size={ButtonSizes.DEFAULT}>
                            EXPLORE MORE
                        </Button>
                        <Button theme={ButtonThemes.LIGHT_BORDER} size={ButtonSizes.SMALL}>
                            CREATE NFT
                        </Button>
                    </div>
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>430K+</h3>
                            <p className={styles.featureSecondary}>Art Works</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>159K+</h3>
                            <p className={styles.featureSecondary}>Creators</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>87K+</h3>
                            <p className={styles.featureSecondary}>Collections</p>
                        </div>

                    </div>
                </div>

                <div className={styles.heroHeader}>
                    <div className={styles.heroImages}>
                        <div className={styles.heroImage1}>
                            <img className={styles.image1} src={HeroImage1} alt="heroImage"/>
                        </div>
                        <div className={styles.heroImage2}>
                            <div className={styles.heroArrow}>
                                <HeroArrow/>
                            </div>
                            <img className={styles.image2} src={HeroImage2} alt="heroImage"/>
                        </div>
                    </div>


                </div>
                <div className={styles.heroBackground}><HeroBackground/></div>

            </div>
        </div>
    );
};

