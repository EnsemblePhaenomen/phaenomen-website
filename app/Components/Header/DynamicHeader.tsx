"use client";

import useScrollPosition from "../../hooks/useScrollPosition";
import HeaderBackground from "./HeaderBackground";
import HeaderLogo from "./HeaderLogo";
import HeaderNavigation from "./HeaderNavigation";
import BurgerMenu from "./BurgerMenu";
import { NAVIGATION_ITEMS, LOGO_CONFIG } from "./HeaderConfig";

export default function DynamicHeader() {
    const isOnWhiteSection = useScrollPosition();

    return (
        <>
            {/* Background blanc qui apparaît progressivement */}
            <HeaderBackground isVisible={isOnWhiteSection} />

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
                            isDark={isOnWhiteSection}
                        />
                    </div>

                    {/* Mobile Burger Menu */}
                    <BurgerMenu
                        items={NAVIGATION_ITEMS}
                        isDark={isOnWhiteSection}
                    />
                </nav>
            </header>
        </>
    );
}