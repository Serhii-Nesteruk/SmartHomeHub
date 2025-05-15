import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";

export default function Home() {
    return (
        <div className="App">
            <Header
                menuLinks={['Home', 'Contact us', 'Shop']}
            />
            <Hero
                title={'SMART HOME HUB'}
                description={'Smart-технології нового покоління — керуй комфортом одним дотиком.'}
            />
            <HowItWorks
                title={'Твій розумний дім — це просто'}
            />
        </div>
    )
}