import { useEffect, useState } from 'react';
import { AnimatedNumber } from '@/components/motion-primitives/animated-number';
import { motion } from 'framer-motion';
import {Button} from "@/components/Button/Button.tsx";

import {ButtonSizes, ButtonThemes} from "@/components/Button/types.ts";

import HeroArrow from "@/assets/icons/HeroArrow.svg"
import HeroBackground from "@/assets/icons/HeroBackground.svg"
import HeroImage1 from "@/assets/images/hero/HeroImage1.jpg"
import HeroImage2 from "@/assets/images/hero/HeroImage2.jpg"

import styles from './styles.module.scss'

export const Hero = () => {
    const [artWorks, setArtWorks] = useState(100);
    const [creators, setCreators] = useState(100);
    const [collections, setCollections] = useState(10);

    useEffect(() => {
        setArtWorks(430);
        setCreators(159);
        setCollections(87);
    }, []);

    return (
        <div className={styles.hero}>
            <div id="hero" className={styles.heroContainer}>
                <div className={styles.heroText}>
                    <div className={styles.line}></div>
                    <div className={styles.over}>
                        <div className={styles.overLine}></div>
                        <p className={styles.overText}>OVER 1M CREATORS</p>
                    </div>
                    <motion.h1
                        className={styles.title}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, duration: 0.5}}
                    >
                        Discover And Create NFTs
                    </motion.h1>

                    <motion.p
                        className={styles.description}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.4, duration: 0.5}}
                    >
                        Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get
                        a <span className={styles.highlight}>$20 bonus.</span>
                    </motion.p>

                    <motion.div
                        className={styles.buttonGroup}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.6, duration: 0.5}}
                    >
                        <Button className={styles.exploreButton} theme={ButtonThemes.DARK} size={ButtonSizes.DEFAULT}>
                            EXPLORE MORE
                        </Button>
                        <Button className={styles.createButton} theme={ButtonThemes.LIGHT_BORDER}
                                size={ButtonSizes.SMALL}>
                            CREATE NFT
                        </Button>
                    </motion.div>

                    <motion.div
                        className={styles.features}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.8, duration: 0.5}}
                    >
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>
                                <AnimatedNumber
                                    className={styles.featureNumber}
                                    springOptions={{
                                        bounce: 0,
                                        duration: 4000,
                                    }}
                                    value={artWorks}
                                />K+
                            </h3>
                            <p className={styles.featureSecondary}>Art Works</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>
                                <AnimatedNumber
                                    className={styles.featureNumber}
                                    springOptions={{
                                        bounce: 0,
                                        duration: 3000,
                                    }}
                                    value={creators}
                                />K+
                            </h3>
                            <p className={styles.featureSecondary}>Creators</p>
                        </div>
                        <div className={styles.feature}>
                            <h3 className={styles.featureNumber}>
                                <AnimatedNumber
                                    className={styles.featureNumber}
                                    springOptions={{
                                        bounce: 0,
                                        duration: 2000,
                                    }}
                                    value={collections}
                                />K+
                            </h3>
                            <p className={styles.featureSecondary}>Collections</p>
                        </div>
                    </motion.div>
                </div>

                <div className={styles.heroHeader}>
                    <div className={styles.heroImages}>
                        <motion.div
                            className={styles.heroImage1}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 1, duration: 0.5}}
                        >
                            <img className={styles.image1} src={HeroImage1} alt="heroImage"/>
                        </motion.div>

                        <motion.div
                            className={styles.heroImage2}
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            transition={{delay: 1.2, duration: 0.5}}
                        >
                            <motion.div
                                className={styles.heroArrow}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.5, duration: 1.5}}
                            >
                                <HeroArrow/>
                            </motion.div>
                            <img className={styles.image2} src={HeroImage2} alt="heroImage"/>
                            <motion.div
                                className={styles.heroBackground}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1.5, duration: 0.5}}
                            >
                                <HeroBackground/>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </div>
    );
};

