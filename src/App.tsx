import {Header} from "@/widgets/Header/Header.tsx";
import {Hero} from "@/widgets/Hero/Hero.tsx";
import { Weekly } from '@/widgets/Weekly/Weekly.tsx'
import Banner from '@/widgets/Banner/Banner.tsx'
import Footer from '@/widgets/Footer/Footer.tsx'


const App = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Weekly/>
            <Banner/>
            <Footer/>
        </>
    );
};

export default App;