import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Cocktails />
        </>
    )
}

export default App;