import {Header} from "@/widgets/Header/Header.tsx";
import {Hero} from "@/widgets/Hero/Hero.tsx";
import { Weekly } from '@/widgets/Weekly/Weekly.tsx'
import Banner from '@/widgets/Banner/Banner.tsx'
import Footer from '@/widgets/Footer/Footer.tsx'
import {useState} from "react";
import {Menu} from "@/widgets/Menu/Menu.tsx";


const App = () => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            <Header menu={menu} setMenu={setMenu}/>
            {!menu ?
                <>
                    <Hero/>
                    <Weekly/>
                    <Banner/>
                    <Footer/>
                </>
                :
                    <Menu/>
            }
        </>
    );
};

export default App;