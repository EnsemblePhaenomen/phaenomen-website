import { useState, useEffect } from "react";

export default function useScrollPosition() {
    const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            const heroSection = document.querySelector('#hero-section');
            const aboutSection = document.querySelector('#about');

            if (heroSection && aboutSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                const aboutTop = aboutSection.getBoundingClientRect().top;

                // Transition commence quand on approche de la fin de hero (200px avant)
                const transitionZone = heroBottom <= 200 || aboutTop <= 100;
                setIsOnWhiteSection(transitionZone);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Retourne false pendant l'hydratation pour éviter le mismatch
    return isMounted ? isOnWhiteSection : false;
}
