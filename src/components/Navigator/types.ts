import {SwiperRef} from "swiper/react";
import {RefObject} from "react";


export interface INavigator {
    listRef: RefObject<SwiperRef | null>;
}