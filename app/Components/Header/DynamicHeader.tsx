"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useHeader } from "../../contexts/HeaderContext";
import HeaderBackground from "./HeaderBackground";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import BurgerMenu from "./BurgerMenu";
import { NAVIGATION_ITEMS, LOGO_CONFIG } from "./HeaderConfig";

export default function DynamicHeader() {
    const pathname = usePathname();
    const isOnWhiteSection = useScrollPosition();
    const { isDark, setIsDark } = useHeader();

    // Mettre à jour isDark selon la page et la position de scroll
    useEffect(() => {
        if (pathname === "/") {
            // Sur la page d'accueil, utiliser la position de scroll
            setIsDark(isOnWhiteSection);
        } else {
            // Sur les autres pages (/pages/*), toujours en mode dark
            setIsDark(true);
        }
    }, [pathname, isOnWhiteSection, setIsDark]);

    return (
        <>
            {/* Background blanc qui apparaît progressivement */}
            <HeaderBackground isVisible={isDark} />

            {/* Header avec contenu */}
            <header className="fixed inset-x-0 top-0 z-50 bg-transparent p-4 pointer-events-auto">
                <nav className="w-full mx-auto flex justify-between items-center">
                    <HeaderLogo
                        src={LOGO_CONFIG.src}
                        alt={LOGO_CONFIG.alt}
                        width={LOGO_CONFIG.width}
                        height={LOGO_CONFIG.height}
                    />
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <HeaderNavigation
                            items={NAVIGATION_ITEMS}
                            isDark={isDark}
                        />
                    </div>

                    {/* Mobile Burger Menu */}
                    <BurgerMenu
                        items={NAVIGATION_ITEMS}
                        isDark={isDark}
                    />
                </nav>
            </header>
        </>
    );
}