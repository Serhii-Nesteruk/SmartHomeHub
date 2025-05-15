import './Hero.css'
import '../Button/Button.css'
import '../common.css'

import Button from "../Button/Button";
import { ShoppingBag } from 'lucide-react'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function HeroDescription({ title, description, className }) {
   return (
       <div className={className}>
           <h1>{title}</h1>
           <p>{description}</p>
       </div>
   );
}

export default function Hero({title, description}) {
    const navigate = useNavigate();
    const [ loaded, setLoaded ] = useState(false);
    const [ pulseBtn, setPulseBtn ] = useState(false);

    useEffect(() => {
        const timeout = setTimeout( () => setLoaded ( true ), 500);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const interval = setInterval( () => {
            setPulseBtn (prev => !prev);
        }, 1500)
        return () => clearInterval(interval);
    }, [pulseBtn]);

    function ShopButtonClicked() {
        navigate('/shop');
    }

    return (
        <section className="hero is-dark">
            <div className={"hero-container"}>
                <HeroDescription
                    className={`fade-in ${loaded ? ' show' : ''}`}
                    title={title}
                    description={description} />
                <Button
                    className={`custom-button fade-in ${loaded ? ' show' : ''} ${pulseBtn ? ' pulse' : ''}`}
                    onClick={() => ShopButtonClicked()}>
                    <ShoppingBag className="w-5 h-5" />
                    <span>Shop now!</span>
                </Button>
            </div>
        </section>
    )
}