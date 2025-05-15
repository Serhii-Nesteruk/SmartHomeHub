// HowItWorks.js
import React, { useEffect, useRef } from 'react'
import './HowItWorks.css'
import Step from './Step'
import { Smartphone, Plug, Lightbulb } from 'lucide-react'

const ANIMATION_DELAY = 1000;
const INTERSECTION_THRESHOLD = 0.3;

const STEPS = [
    {
        icon: Lightbulb,
        title: 'Вибери пристрої',
        description: 'Світло, безпека, клімат — що тобі потрібно',
        side: 'left'
    },
    {
        icon: Plug,
        title: 'Під`єднай через додаток',
        description: 'Легке налаштування з інструкціями',
        side: 'right'
    },
    {
        icon: Smartphone,
        title: 'Керуй зі смартфона',
        description: 'Автоматизуй, економ і насолоджуйся',
        side: 'left'
    }
];

const SVG_PATH = `M 20,50 
    C 60,50 80,75 80,100
    S 60,150 20,150
    S 80,200 80,225
    S 60,250 20,250`;

export default function HowItWorks({title}) {
    const stepsRef = useRef([]);
    const lineRef = useRef(null);

    const startLineAnimation = () => {
        if (lineRef.current) {
            lineRef.current.classList.add('animate');
        }
    };

    const setupIntersectionObserver = () => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer?.unobserve(entry.target);
                    }
                });
            },
            { threshold: INTERSECTION_THRESHOLD }
        );

        stepsRef.current.forEach((step) => {
            if (step) observer.observe(step);
        });

        return observer;
    };

    useEffect(() => {
        let observer = null;
        
        const lineTimeout = setTimeout(startLineAnimation, ANIMATION_DELAY);
        const stepsTimeout = setTimeout(() => {
            observer = setupIntersectionObserver();
        }, ANIMATION_DELAY);
        
        return () => {
            clearTimeout(lineTimeout);
            clearTimeout(stepsTimeout);
            observer?.disconnect();
        }
    }, []);

    return (
        <section className="howitworks-section">
            <h2 className="howitworks-title">{title}</h2>
            <div className="howitworks-container">
                <svg className="connecting-line" viewBox="0 0 100 300" preserveAspectRatio="none" ref={lineRef}>
                    <path
                        d={SVG_PATH}
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                    />
                </svg>
                <div className="hiw-steps">
                    {STEPS.map((step, index) => (
                        <div 
                            key={step.title}
                            className={`step-wrapper ${step.side}`}
                            ref={(el) => (stepsRef.current[index] = el)}
                        >
                            <Step
                                icon={step.icon}
                                title={step.title}
                                description={step.description}
                                side={step.side}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
