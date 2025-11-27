"use client";

import { useState } from "react";
import Link from "next/link";
import { scrollToSection } from "@/app/utils/scrollToSection";

interface SubMenuItem {
  href: string;
  label: string;
}

interface NavItem {
  href: string;
  label: string;
  subMenu?: SubMenuItem[];
}

interface BurgerMenuProps {
  items: NavItem[];
  isDark: boolean;
}

export default function BurgerMenu({ items, isDark }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<Set<string>>(new Set());

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Si c'est une ancre (#), utiliser scrollToSection
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
    // Sinon, laisser Next.js gérer la navigation
    setIsOpen(false);
    setOpenSubMenus(new Set());
  };

  const toggleSubMenu = (href: string) => {
    setOpenSubMenus((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(href)) {
        newSet.delete(href);
      } else {
        newSet.add(href);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
          isDark
            ? "text-black hover:bg-gray-100"
            : "text-white hover:bg-white/10"
        }`}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-white" : "bg-gray-900"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Fermer le menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="px-4 py-2">
          {items.map((item) => (
            <div key={item.href} className="mb-2">
              {/* Main Item */}
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`flex-1 py-3 px-2 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? "text-black hover:bg-gray-100"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>

                {/* SubMenu Toggle Button */}
                {item.subMenu && item.subMenu.length > 0 && (
                  <button
                    onClick={() => toggleSubMenu(item.href)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isDark
                        ? "text-black hover:bg-gray-100"
                        : "text-white hover:bg-white/10"
                    }`}
                    aria-label={`Toggle ${item.label} submenu`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openSubMenus.has(item.href) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* SubMenu Items */}
              {item.subMenu && openSubMenus.has(item.href) && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      onClick={(e) => handleClick(e, subItem.href)}
                      className={`block py-2 px-3 rounded-lg text-sm transition-colors duration-200 ${
                        isDark
                          ? "text-gray-700 hover:bg-gray-100"
                          : "text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
