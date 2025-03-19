import {WeeklyCard} from "@/widgets/Weekly/WeeklyCard/WeeklyCard.tsx";
import {Navigator} from "@/components/Navigator/Navigator.tsx";

import WeeklyIcon1 from "@/assets/images/weekly/WeeklyImage1.png"
import WeeklyIcon2 from "@/assets/images/weekly/WeeklyImage2.png"
import WeeklyIcon3 from "@/assets/images/weekly/WeeklyImage3.png"
import WeeklyIcon4 from "@/assets/images/weekly/WeeklyImage4.png"
import WeeklyIcon5 from "@/assets/images/weekly/WeeklyImage5.png"
import { FreeMode } from 'swiper/modules';
import styles from './styles.module.scss'
import {useRef} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {useScreenDetector} from "@/lib/utils.ts";

const cards = [
    { title: "Sun-Glass", price: 1.75, imageUrl: WeeklyIcon1 },
    { title: "Sun-Glass", price: 1.75, imageUrl: WeeklyIcon2 },
    { title: "Sun-Glass", price: 1.75, imageUrl: WeeklyIcon3 },
    { title: "NuEvey", price: 1.25, imageUrl: WeeklyIcon4 },
    { title: "NuEvey", price: 1.25, imageUrl: WeeklyIcon5 },
];

export const WeeklyCardList = () => {
    const listRef = useRef<SwiperRef>(null);
    const {width} = useScreenDetector()
    const slidesPerView = () => {
        if(width >= 1500){
            return 5
        }
        if(width <= 1500 && width >= 1100){
            return 4
        }
        if(width <= 1100 && width >= 800){
            return 3
        }
        if(width <= 800 && width >= 500){
            return 2
        }

        return 1;
    };
    return (
        <div className={styles.weeklyCardList}>
            <div>
                <Swiper
                    onSwiper={(swiper) => {
                        if(listRef.current) {
                            listRef.current.swiper = swiper
                        }
                    }}
                    ref={listRef}
                    slidesPerView={slidesPerView()}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className={styles.list}
                    loop={true}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <WeeklyCard title={card.title} price={card.price} imageUrl={card.imageUrl} />
                        </SwiperSlide>
                    ))}
                    {cards.map((card, index) => (
                        <SwiperSlide key={index + cards.length}>
                            <WeeklyCard title={card.title} price={card.price} imageUrl={card.imageUrl} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Navigator listRef={listRef} />
        </div>
    );
};