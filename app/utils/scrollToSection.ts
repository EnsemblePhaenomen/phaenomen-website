/**
 * Scroll vers une section avec un offset pour compenser le header fixe
 * @param targetHref - Le sélecteur de la section cible (ex: "#about")
 * @param offset - L'offset en pixels (par défaut 100px pour le header)
 */
export function scrollToSection(targetHref: string, offset: number = 100) {
  const targetElement = document.querySelector(targetHref);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
