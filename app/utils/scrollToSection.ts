/**
 * Scroll vers une section avec un offset pour compenser le header fixe
 * @param targetHref - Le sélecteur de la section cible (ex: "#about")
 * @param offset - L'offset en pixels (par défaut 80px pour le header)
 */
export function scrollToSection(targetHref: string, offset: number = 80) {
  const targetElement = document.querySelector(targetHref);
  if (targetElement) {
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
